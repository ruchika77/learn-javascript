const { URLS } = require('./app.config');

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app

        browser.get(URLS.BASE);
        browser.sleep(4000);

    });

    it('should open on disappearing elements page onClick of the link', function () {

        $$('#content > ul > li:nth-child(7) > a').click();
        browser.sleep(4000);
        // To check the current url of the browser
        browser.getCurrentUrl().then((currentUrl) => {
            expect(currentUrl).toBe(URLS.DISAPPEARING_ELEMENTS)
        });
    });

    it('should refresh the page', function () {
        browser.get(URLS.DISAPPEARING_ELEMENTS);
        browser.sleep(3000);
    })
    it('should check the elements', function () {
        browser.get(URLS.DISAPPEARING_ELEMENTS);

        let expected = ['Home', 'About', 'Portfolio', 'Contact Us', 'Gallery'];
        var els = getElementByName('li')

        for (var i = 0; i < expected.length; ++i) {
            els.get(i).getText().then(function (text) {
                expect(text).toEqual(expected[i]); // Error: `i` is always 3. 
            })
        };
    });
});