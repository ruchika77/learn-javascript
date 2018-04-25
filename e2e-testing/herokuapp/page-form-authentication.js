const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let username = "tomsmith";
    let password = "SuperSecretPassword!";

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Form authentication page onClick of the link', function () {
        $$('#content > ul > li:nth-child(18) > a').click();
        browser.sleep(2000);
    })

    it('should enter username & password and click on Login button', function () {
        $$('#username').sendKeys(username);
        browser.sleep(1000);
        $$('#password').sendKeys(password);
        browser.sleep(1000);
        $$('#login > button > i').click();
        browser.sleep(1000);
    })

    it('should check logged in message and click on Logout button', function () {
        let message = element(by.css('#flash')).getText().then((txt) => {
            console.log(txt);
        })
        $$('#content > div > a > i').click();
        browser.sleep(2000);
        browser.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).toBe(URLS.FORM_AUTHENTICATION)
        })
    })

})
