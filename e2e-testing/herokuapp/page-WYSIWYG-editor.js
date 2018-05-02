const { URLS } = require('./app.config');

fdescribe('AB Testing', function () {
    let text = " Welcome to the Automation world!! ";
    
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open WYSIWYG editor page onClick of the link', function () {
        $$('#content > ul > li:nth-child(39) > a').click();
        browser.sleep(2000);

    })

    it('should write to the frame body', function () {
        browser.driver.findElement(by.id('mce_0_ifr')).sendKeys(text);
        browser.sleep(3000);

    })
})

