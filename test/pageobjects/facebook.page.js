const {$} = require('@wdio/globals')
const Page = require('./page');

class FacebookPage extends Page {

    get facebookLoginForm() {
        return $('#login_form');
    }


}

module.exports = new FacebookPage();