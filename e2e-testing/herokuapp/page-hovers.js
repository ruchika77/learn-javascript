const { URLS } = require('./app.config');


fdescribe('AB Testing', function () {
    let img1 = element(by.css('div.figure:nth-child(3)'));
    let img2 = element(by.css('div.figure:nth-child(4)'));
    let img3 = element(by.css('div.figure:nth-child(5)'));
    let name1 = "name: user1";
    let name2 = "name: user2";
    let name3 = "name: user3";
    let nme1 = element(by.css('div.figure:nth-child(3) > div:nth-child(2) > h5:nth-child(1)'));
    let nme2 = element(by.css('div.figure:nth-child(4) > div:nth-child(2) > h5:nth-child(1)'));
    let nme3 = element(by.css('div.figure:nth-child(5) > div:nth-child(2) > h5:nth-child(1)'));

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open hovers page onClick of the link', function () {
        $$('#content > ul > li:nth-child(22) > a').click();
        browser.sleep(2000);
    })

    it('should hover on the first image and verify username', function () {
        browser.actions().mouseMove(img1).perform();
        browser.sleep(3000);
        expect(nme1.getText()).toBe(name1);

    })

    it('should hover on the second image and verify username', function () {
        browser.actions().mouseMove(img2).perform();
        browser.sleep(3000);
        expect(nme2.getText()).toBe(name2);

    })

    it('should hover on the third image and verify username', function () {
        browser.actions().mouseMove(img3).perform();
        browser.sleep(3000);
        expect(nme3.getText()).toBe(name3);

    })
 
})
