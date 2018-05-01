const { URLS } = require('./app.config');

fdescribe('AB Testing', function () {
    let pageTitle = 'Redirection';
    let pageTitleSel = element(by.css('.example > h3:nth-child(1)'));
    let pageTitle1 = 'Status Codes';
    let pageTitleSel1 = element(by.css('.example > h3:nth-child(1)'));

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open redirect link page onClick of the link', function () {
        $$('#content > ul > li:nth-child(32) > a').click();
        browser.sleep(2000);
        expect(pageTitleSel.getText()).toContain(pageTitle);
    })

    it('should click on Click here link', function () {
        $$('#redirect').click()
        browser.sleep(2000);
        expect(pageTitleSel1.getText()).toContain(pageTitle1);
        $$('.example > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1)').click(); //click on 200 code
        
    })
})

