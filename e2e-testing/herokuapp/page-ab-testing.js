const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open on A/B testing page onClick of the link', function () {

        // To click the 1st selector
        $$('#content > ul > li:nth-child(1) > a').click();

        // To check the current url of the browser
        browser.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).toBe(URLS.AB_TEST)
        });
    });


    it('should check the page title', function () {
        const heading = element(by.css('#content > div > h3')).getText().then((txt) => {
            console.log(txt);
        });
        browser.sleep(3 * 1000); // 3 sec
    })

});