const {$} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productsSpan() {
        return $('//span[text()="Products"]');
    }

    get cartDiv() {
        return $('.shopping_cart_container');
    }

    get burgerButton() {
        return $('#react-burger-menu-btn');
    }

    get itemsMenu() {
        return $('.bm-item-list');
    }

    get logoutItem() {
        return $('#logout_sidebar_link');
    }

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    get shoppingCartLink() {
        return $('.shopping_cart_link');
    }

    get productSortDropdown() {
        return $('.product_sort_container');
    }

    get itemName() {
        return $('(//div[@class="inventory_item_name"])[1]');
    }

    get twitterIcon() {
        return $('.social_twitter');
    }

    get facebookIcon() {
        return $('.social_facebook');
    }

    get linkedinIcon() {
        return $('.social_linkedin');
    }


    async clickBurger() {

        await this.burgerButton.click();
    }

    async clickLogout() {

        await this.logoutItem.click();
    }

    async clickAddToCartButton() {

        await this.addToCartButton.click();
    }

    async getShoppingCartBadgeText() {
        return await this.shoppingCartBadge.getText();

    }

    async clickShoppingCartLink() {
        await this.shoppingCartLink.click();
    }

    async clickProductSortDropdown() {
        await this.productSortDropdown.click();
    }

    async selectByValue(value) {
        await this.productSortDropdown.selectByAttribute('value', value);
    }

    async getItemNameText() {
        return await this.itemName.getText();
    }

    async clickTwitterIcon() {
        await this.twitterIcon.click();
    }

    async clickFacebookIcon() {
        await this.facebookIcon.click();
    }

    async clickLinkedinIcon() {
        await this.linkedinIcon.click();
    }


}

module.exports = new InventoryPage();
