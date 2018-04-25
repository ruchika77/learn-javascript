const { URLS } = require('./app.config');
var fs = require('fs');
var filename = '/Users/ruchika.mehta/Ruchika_Learning/learn-javascript/src/some-file.txt';

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open file download page onClick of the link', function () {

        $$('#content > ul > li:nth-child(14) > a').click();
        browser.sleep(2000);

    });

    it('should download all the file on download page', function () {
        $$('#content > div > a:nth-child(2)').click()
        browser.sleep(2000);
        $$('#content > div > a:nth-child(4)').click()
        browser.sleep(2000);
        $$('#content > div > a:nth-child(6)').click()
        browser.sleep(2000);
        browser.driver.wait(function () {
            return fs.existsSync(filename);
        }, 30000).then(function () {

            expect(fs.readFileSync(filename, { name: 'some-file.txt' })).toEqual(
                "some-file.txt"
            );
        })

    })
})
