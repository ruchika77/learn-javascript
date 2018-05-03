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
        browser.sleep(2000);
        $$('#mceu_3 > button:nth-child(1)').click(); //to bold the text
        $$('#mceu_4 > button:nth-child(1)').click(); //to italic the text
        browser.sleep(500);
       // $$('#mceu_5 > button:nth-child(1)').click(); //to align text left
      //  browser.sleep(2000);
        browser.driver.findElement(by.id('mce_0_ifr')).sendKeys(text);
        browser.sleep(4000);


    })
})

