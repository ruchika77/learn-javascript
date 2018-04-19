const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open dropdown list page onClick of the link', function () {

        $$('#content > ul > li:nth-child(9) > a').click();
        browser.sleep(2000);
        // To check the current url of the browser
        browser.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).toBe(URLS.DROPDOWN);
        });
    });

    it('should click on the drop down list and select 1st element', function(){
        $$('#dropdown').click()
        browser.sleep(2000);
        $$('#dropdown > option:nth-child(2)').click()
        browser.sleep(3000);
        $$('#dropdown').click()
        browser.sleep(2000);
        $$('#dropdown > option:nth-child(3)').click()
        browser.sleep(3000);
    })
});