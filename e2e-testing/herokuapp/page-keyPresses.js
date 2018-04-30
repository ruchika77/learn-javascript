const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let msgSelect = element(by.css('#result'));
    let msgEnter = "You entered: ENTER";
    let msgTab = "You entered: TAB";
    let msgEscape = "You entered: ESCAPE";
    let key = 'R';
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Key Presses page onClick of the link', function () {
        $$('#content > ul > li:nth-child(27) > a').click();
        browser.sleep(2000);
    })

    it('should click on Enter key', function () {
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.sleep(1000);
        expect(msgSelect.getText()).toBe(msgEscape);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
        expect(msgSelect.getText()).toBe(msgEnter);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        expect(msgSelect.getText()).toBe(msgTab);
        browser.actions().sendKeys(key).perform();
        browser.sleep(1000);
        expect(msgSelect.getText()).toBe("You entered: " + key);

    })
})


