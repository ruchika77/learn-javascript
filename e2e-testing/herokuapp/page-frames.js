const { URLS } = require('./app.config');

let text = " Welcome to the Automation world ";

describe('AB Testing', function () {

    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    })

    it('should open frames page onClick of the link', function () {
        $$('#content > ul > li:nth-child(19) > a').click();
        browser.sleep(2000);
    })

    it('should click on Nested frames', function () {
        $$('#content > div > ul > li:nth-child(1) > a').click();
        browser.sleep(2000);
    })

    it('should check left frame is present', function () {
        let leftFrame = $$('html > frameset > frame:nth-child(1)').isPresent();
        browser.sleep(2000);
        //opens the frames page
        browser.get(URLS.FRAMES);
    })

    it('should click on iFrames option', function () {
        $$('#content > div > ul > li:nth-child(2) > a').click();
        browser.sleep(1000);
        // write to the frame body
        browser.driver.findElement(by.id('mce_0_ifr')).sendKeys(text);
        browser.sleep(6000);

        //clear the text in fram body
        
        /*let field = element(by.css('mce_0_ifr')).getText().then((txt) => {
            console.log(txt);
        });
        field.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        field.sendKeys(protractor.Key.BACK_SPACE);
        field.clear();*/
       
    })


})


