const {$} = require('@wdio/globals')
const Page = require('./page');

class OverviewPage extends Page {

    get overviewItemPrice() {
        return $('.inventory_item_price');
    }

    get btnFinish() {
        return $('#finish');
    }


    async clickBtnFinish() {
        await this.btnFinish.click();
    }

}

module.exports = new OverviewPage();