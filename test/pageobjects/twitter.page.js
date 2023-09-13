const {$} = require('@wdio/globals')
const Page = require('./page');

class TwitterPage extends Page {

    get twitterTitle() {
        return $('.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-19yznuf.r-64el8z.r-1ny4l3l.r-o7ynqc.r-6416eg.r-lrvibr');
    }


}

module.exports = new TwitterPage();