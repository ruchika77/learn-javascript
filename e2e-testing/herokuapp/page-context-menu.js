// import { protractor } from 'protractor/built/ptor';

const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open context menu page onClick of the link', function () {

        $$('#content > ul > li:nth-child(6) > a').click();
        browser.sleep(2000);
    });

    it('should right click on the box', function () {
        // const ele = $$('#hot-spot');
        // browser.actions().click(ele, protractor.Button.RIGHT).perform();
        browser.actions()
        .click($('#hot-spot'), protractor.Button.RIGHT)
        .perform();
        browser.sleep(5000);
        console.log("clicked on the box");
    })
})







