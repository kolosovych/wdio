const {$} = require('@wdio/globals')
const Page = require('./page');


class CheckoutPage extends Page {
    get firstNameInputID() {
        return $('#first-name');
    }

    get lastNameInputID() {
        return $('#last-name');
    }

    get postalCodeInputID() {
        return $('#postal-code');
    }

    get btnContinue() {
        return $('#continue');
    }

    get cartIsEmptyErrorMessage() {
        return $('body*=Cart is empty');
    }


    async checkout(firstName, lastName, postalCode) {
        await this.firstNameInputID.setValue(firstName);
        await this.lastNameInputID.setValue(lastName);
        await this.postalCodeInputID.setValue(postalCode);
        await this.btnContinue.click();
    }

    async getFirstNameInputIDValue() {
        await this.firstNameInputID.getValue();
    }

    async getLastNameInputIDValue() {
        await this.lastNameInputID.getValue();

    }

    async getPostalCodeInputIDValue() {
        await this.postalCodeInputID.getValue();
    }


}

module.exports = new CheckoutPage();