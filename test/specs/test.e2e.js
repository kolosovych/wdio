const {expect} = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const CartPage = require('../pageobjects/cart.page')
const TwitterPage = require('../pageobjects/twitter.page')
const FacebookPage = require('../pageobjects/facebook.page')
const LinkedinPage = require('../pageobjects/linkedin.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const OverviewPage = require('../pageobjects/overview.page')
const CheckoutComplete = require('../pageobjects/checkout.complete.page')

describe('My Login application', () => {
    it('Valid Login', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.productsSpan).toBeExisting()
        await expect(InventoryPage.cartDiv).toBeExisting()
    })

    it('Login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'invalid')
        await expect(LoginPage.errorHeading).toBeExisting()
        await expect(LoginPage.errorHeading).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })

    it('Login with invalid login', async () => {
        await LoginPage.open()

        await LoginPage.login('invalid', 'secret_sauce')
        await expect(LoginPage.errorHeading).toBeExisting()
        await expect(LoginPage.errorHeading).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')
    })

    it('Logout', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickBurger()
        await expect(InventoryPage.itemsMenu).toHaveChildren(4)
        await InventoryPage.clickLogout()
        await expect(LoginPage.loginContainer).toBeExisting()
        await expect(await LoginPage.getUserNameValue()).toBeUndefined()
        await expect(await LoginPage.getPasswordValue()).toBeUndefined()
    })

    it('Checkout without products', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickAddToCartButton()
        await expect(await InventoryPage.getShoppingCartBadgeText()).toEqual('1')
        await InventoryPage.clickBurger()
        await expect(InventoryPage.itemsMenu).toHaveChildren(4)
        await InventoryPage.clickLogout()
        await expect(LoginPage.loginContainer).toBeExisting()
        await expect(await LoginPage.getUserNameValue()).toBeUndefined()
        await expect(await LoginPage.getPasswordValue()).toBeUndefined()
        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickShoppingCartLink()
        await expect(await CartPage.getCartQuantityText()).toEqual('1')
    })

    it('Sorting', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickProductSortDropdown()
        await InventoryPage.selectByValue('az')
        await expect(await InventoryPage.getItemNameText()).toEqual('Sauce Labs Backpack')
        await InventoryPage.selectByValue('za')
        await expect(await InventoryPage.getItemNameText()).toEqual('Test.allTheThings() T-Shirt (Red)')
        await InventoryPage.selectByValue('lohi')
        await expect(await InventoryPage.getItemNameText()).toEqual('Sauce Labs Onesie')
        await InventoryPage.selectByValue('hilo')
        await expect(await InventoryPage.getItemNameText()).toEqual('Sauce Labs Fleece Jacket')
    })

    it('Footer links', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.url('https://www.saucedemo.com/inventory.html')
        await InventoryPage.clickTwitterIcon()
        await browser.switchWindow('https://twitter.com/saucelabs')
        await expect(TwitterPage.twitterTitle).toBeExisting()
        await browser.switchWindow('https://www.saucedemo.com/inventory.html')
        await InventoryPage.clickFacebookIcon()
        await browser.switchWindow('https://www.facebook.com/saucelabs')
        await expect(FacebookPage.facebookLoginForm).toBeExisting()
        await browser.switchWindow('https://www.saucedemo.com/inventory.html')
        await InventoryPage.clickLinkedinIcon()
        await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/')
        await expect(LinkedinPage.linkedinSauceLabsHeading).toBeExisting()
    })

    it('Valid Checkout', async () => {
        await browser.reloadSession()
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickAddToCartButton()
        await expect(await InventoryPage.getShoppingCartBadgeText()).toEqual('1')
        await InventoryPage.clickShoppingCartLink()
        await expect(await CartPage.getCartQuantityText()).toEqual('1')
        await CartPage.clickCartCheckoutButton()
        await expect(CheckoutPage.firstNameInputID).toBeExisting()
        await CheckoutPage.checkout('First', 'Second', 123456)
        await expect(OverviewPage.overviewItemPrice).toBeExisting()
        await OverviewPage.clickBtnFinish()
        await expect(CheckoutComplete.headerMessage).toHaveText('Thank you for your order!')
        await CheckoutComplete.clickBtnBackHome()
        await InventoryPage.shoppingCartBadge.waitForExist({reverse: true});
    })

    it('Checkout without products', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.clickShoppingCartLink()
        await CartPage.clickCartCheckoutButton()
        //await expect(CheckoutPage.cartIsEmptyErrorMessage).toBeExisting()

    })


})

