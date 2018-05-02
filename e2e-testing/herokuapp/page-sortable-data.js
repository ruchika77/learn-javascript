const { URLS } = require('./app.config');

describe('AB Testing', function () {
    
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open redirect link page onClick of the link', function () {
        $$('#content > ul > li:nth-child(36) > a').click();
        browser.sleep(5000);

    })

    // code needs to be changed. It's not working
    it('should click on Last name', function () {
        console.log("Here!!");
        $$('#table1 > thead > tr > th.header.headerSortDown > span').click() // to sort the data by last name
        console.log("I clicked!!");
        browser.sleep(8000);

    })
})

