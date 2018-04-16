const { URLS } = require('./app.config');
console.log(URLS);
describe('Broken Images', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open on broken images page onClick of the link', function () {

        // To click the 1st selector
        $$('#content > ul > li:nth-child(3) > a').click();

        // To check the current url of the browser
        browser.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).toBe(URLS.BROKEN_IMAGES)
        });
    });

    it('should check the page title', function () {
        const heading = element(by.css('#content > div > h3')).getText().then((txt) => {
            console.log(txt);
        });
        browser.sleep(3 * 1000); // 3 sec
        expect($$('#content > div > img:nth-child(2)').isPresent()).toBeTruthy(); // check the first image
        expect($$('#content > div > img:nth-child(3)').isPresent()).toBeTruthy(); // check the second image
        expect($$('#content > div > img:nth-child(4)').isPresent()).toBeTruthy(); // check the third image
    })

});