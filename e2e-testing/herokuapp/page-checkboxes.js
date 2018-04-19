const {URLS} = require('./app.config');

describe('Checkboxes', function () {
    it('should open the link for herrokuapp', function () {
        // opens the home page of the app
        browser.get(URLS.BASE);
        browser.sleep(2000);
    });

    it('should open Checkboxes page onClick of the link', function () {
        
        // To click the 5st selector
        $$('#content > ul > li:nth-child(5) > a').click();
        browser.sleep(2000);
        // To check the current url of the browser
        browser.getCurrentUrl().then((currentUrl)=>{
            expect(currentUrl).toBe(URLS.CHECKBOXES)
        });
    });

    it('should check the first checkbox', function(){
        let checkbox1 = $$('#checkboxes > input[type="checkbox"]:nth-child(1)').click();
        browser.sleep(2000);
        console.log("Checkbox 1 is checked !!");
        if(checkbox1 === 'checked'){
            return true;
         }else{
             return false;
         }
        expect(checkbox1.click).toBeTruthy();
    })

    it('should uncheck the second checkbox', function(){
        let checkbox2 = $$('#checkboxes > input[type="checkbox"]:nth-child(3)').click();
        browser.sleep(2000);
        console.log("Checkbox 2 is unchecked !!");
        if(checkbox2 === 'checked'){
           return true;
        }else{
            return false;
        }
       expect(checkbox2).toBeFalsy();

    })
    
});

