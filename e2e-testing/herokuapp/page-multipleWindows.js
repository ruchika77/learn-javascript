const { URLS } = require('./app.config');

fdescribe('AB Testing', function () {
    
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open Key Presses page onClick of the link', function () {
        $$('#content > ul > li:nth-child(29) > a').click();
        browser.sleep(2000);
    })

    it('should click on Click here link', function () {
        
      $$('.example > a:nth-child(2)').click()
      browser.sleep(2000);
    })
})


