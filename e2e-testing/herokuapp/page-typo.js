const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let typoSel = element(by.css('#content > div > p:nth-child(3)'));

    let typoText = "Sometimes you'll see a typo, other times you won't.";
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open typo page onClick of the link', function () {
        $$('#content > ul > li:nth-child(38) > a').click();
        browser.sleep(2000);

    })

    it('should check for the typo', function () {
        expect(typoSel.getText()).toBe(typoText);
        browser.get(URLS.TYPO);
        browser.sleep(2000);
        expect(typoSel.getText()).not.toBe(typoText);
        browser.sleep(3000);
    })
})

