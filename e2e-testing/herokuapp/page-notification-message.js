const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let msg1 = "Action unsuccesful, please try again";
    let msg2 = "Action successful";
    let msgSel = element(by.css('#flash'));

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open multiple windows page onClick of the link', function () {
        $$('#content > ul > li:nth-child(31) > a').click();
        browser.sleep(2000);
        expect(msgSel.getText()).toContain(msg1);
    })

    it('should click on Click here link', function () {
        for (let i = 0; i < 2; i++) {
            $$('#content > div > p > a').click()
            browser.sleep(2000);
        }
        expect(msgSel.getText()).toContain(msg2);
    })
})


