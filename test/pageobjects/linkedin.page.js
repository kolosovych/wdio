const {$} = require('@wdio/globals')
const Page = require('./page');

class LinkedinPage extends Page {

    get linkedinSauceLabsHeading() {
        return $('h1=Sauce Labs');
    }


}

module.exports = new LinkedinPage();