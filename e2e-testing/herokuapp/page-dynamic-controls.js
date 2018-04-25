const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open dynamic control page onClick of the link', function () {

        $$('#content > ul > li:nth-child(11) > a').click();
        browser.sleep(2000);
        
    });

    it('should click on the remove button and verify its gone text', function(){
        $$('#btn').click()
        browser.sleep(6000);
        const text = element(by.css('#message')).getText().then((txt) => {
            console.log(txt);
        });
        browser.sleep(3000);
       
    })

    it('should click on Add button and verify its back text', function(){
        $$('#btn').click()
        browser.sleep(6000);
        const text = element(by.css('#message')).getText().then((txt) => {
            console.log(txt);
        });
        browser.sleep(3000);
    })
});






