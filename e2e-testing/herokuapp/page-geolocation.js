const { URLS } = require('./app.config');

describe('AB Testing', function () {

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Geolocation page onClick of the link', function () {
        $$('#content > ul > li:nth-child(20) > a').click();
        browser.sleep(2000);
    })

    it('should click on Where Am I button', function () {
        $$('#content > div > button').click();
        browser.sleep(2000);

    })

    it('should check latitude and longitude text', function () {
        let latitude = element(by.css('#demo')).getText().then((txt) => {
            browser.sleep(2000);
            expect(txt).toContain("Latitude", "Longitude");
        })
        $$('#map-link > a').click();
        browser.sleep(4000);
    })
})
