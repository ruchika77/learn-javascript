const { URLS } = require('./app.config');
let text1Page1;
let text1Page2;

describe('AB Testing', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open dynamic content page onClick of the link', function () {

        $$('#content > ul > li:nth-child(10) > a').click();
        browser.sleep(2000);
    })

    let txt1;
    let txt2;
    it('should check the texts', function () {
        //before refreshing the page
        text1Page1 = $$('#content > div:nth-child(1) > div.large-10.columns').getText().then((txt1) => {
            console.log(txt1);
        })
        //page refersh
        $$('#content > div > p:nth-child(3) > a').click();
        browser.sleep(2000);
        text1Page2 = $$('#content > div:nth-child(1) > div.large-10.columns').getText().then((txt2) => {
            console.log(txt2);
        })
        if (txt1 === txt2) {
            console.log("Text is not changing");
        } else {
            console.log("Text is changing");
        }
    })

})


