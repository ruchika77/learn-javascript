const { URLS } = require('./app.config');

describe('AB Testing', function () {

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Horizontal slider page onClick of the link', function () {
        $$('#content > ul > li:nth-child(21) > a').click();
        browser.sleep(2000);
    })

    it('should slide the slider', function () {
        let elem = 0;
        let target = 4;
        browser.actions().dragAndDrop(elem, target).mouseUp().perform();
    })

})
