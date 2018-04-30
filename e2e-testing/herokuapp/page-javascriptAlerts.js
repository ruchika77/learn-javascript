const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let msgSelect = element(by.css('#result'));
    let msg1 = "You successfuly clicked an alert";
    let msg2 = "You clicked: Ok";
    let msg3 = "You clicked: Cancel";
    let text = "Hello World!!"
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Javascript Alert page onClick of the link', function () {
        $$('#content > ul > li:nth-child(25) > a').click();
        browser.sleep(2000);
    })

    it('should click on the first button i.e. Click for JS Alert', function () {
        element(by.css('.example > ul:nth-child(3) > li:nth-child(1) > button:nth-child(1)')).click();
        browser.switchTo().alert().accept(); // click on OK
        browser.sleep(3000);
        expect(msgSelect.getText()).toBe(msg1);
    })

    it('should click on the second button i.e. Click for JS Confirm', function () {
        element(by.css('.example > ul:nth-child(3) > li:nth-child(2) > button:nth-child(1)')).click(); 
        browser.switchTo().alert().accept();// click on OK
        browser.sleep(3000);
        expect(msgSelect.getText()).toBe(msg2);
        element(by.css('.example > ul:nth-child(3) > li:nth-child(2) > button:nth-child(1)')).click();
        browser.switchTo().alert().dismiss(); // click on Cancel
        browser.sleep(3000);
        expect(msgSelect.getText()).toBe(msg3);
    })

    it('should click on the third button i.e. Click for JS Prompt', function () {
        element(by.css('.example > ul:nth-child(3) > li:nth-child(3) > button:nth-child(1)')).click();
        browser.switchTo().alert().sendKeys(text); // write msg to the alert
        browser.switchTo().alert().accept();
        browser.sleep(3000);
        expect(msgSelect.getText()).toBe('You entered: '+text);
    })

})
