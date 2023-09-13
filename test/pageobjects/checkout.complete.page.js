const {$} = require('@wdio/globals')
const Page = require('./page');

class CheckoutComplete extends Page {

    get headerMessage() {
        return $('.complete-header');
    }

    get btnBackHome() {
        return $('#back-to-products');
    }


    async clickBtnFinish() {
        await this.btnFinish.click();
    }

    async clickBtnBackHome() {
        await this.btnBackHome.click();
    }
}

module.exports = new CheckoutComplete();