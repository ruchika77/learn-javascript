const { URLS } = require('./app.config');

describe('AB Testing', function () {
    let emailAddress = "ruchika.mehta@gomedia.io";
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open forget password page onClick of the link', function () {
        $$('#content > ul > li:nth-child(17) > a').click();
        browser.sleep(2000);
    })

    it('should write email address and click on retrive password', function(){
        $$('#email').sendKeys(emailAddress);
        browser.sleep(2000);
        $$('#form_submit').click();
        browser.sleep(2000);
    })
    
    it('should check Email sent message', function(){
        let message = element(by.css('#content')).getText().then((txt) => {
            console.log(txt);
        })
        browser.sleep(2000);
    })

    it('should check the negative scenario that dont enter email address and click on retrive pswd ', function(){
        browser.get(URLS.FORGET_PASSWORD);
        $$('#form_submit').click();
        browser.sleep(2000);
        let message = element(by.css('body > h1')).getText().then((txt) => {
            console.log(txt);
        })
        browser.sleep(2000);
    })

})
