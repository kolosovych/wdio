const {$} = require('@wdio/globals')
const Page = require('./page');


class CartPage extends Page {
    get cartQuantity() {
        return $('.cart_quantity');
    }

    get cartCheckoutButton() {
        return $('#checkout');
    }


    async getCartQuantityText() {
        return await this.cartQuantity.getText();
    }

    async clickCartCheckoutButton() {
        await this.cartCheckoutButton.click();
    }

}

module.exports = new CartPage();