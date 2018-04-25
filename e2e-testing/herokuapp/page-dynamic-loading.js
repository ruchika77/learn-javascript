const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open dynamic control page onClick of the link', function () {

        $$('#content > ul > li:nth-child(12) > a').click();
        browser.sleep(2000);

    });

    it('should click on the example 1 link', function () {
        $$('#content > div > a:nth-child(5)').click()
        browser.sleep(3000);
        $$('#start > button').click()
        browser.sleep(7000);
        let text1 = element(by.css('#finish > h4')).getText().then((txt) => {
            console.log(txt);
            browser.sleep(1000);
        })
        
        browser.get(URLS.DYNAMIC_LOADING);
        
        $$('#content > div > a:nth-child(8)').click()
        browser.sleep(3000);
        $$('#start > button').click()
        browser.sleep(7000);
        let text2 = element(by.css('#finish > h4')).getText().then((txt) => {
            console.log(txt);
            browser.sleep(1000);
        })
    })

})

