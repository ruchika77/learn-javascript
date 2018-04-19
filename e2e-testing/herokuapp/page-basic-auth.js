const { URLS } = require('./app.config');
console.log(URLS);
describe('Basic Auth', function () {
  it('should open the link for herrokuapp', function () {
    // opens the home page of the app
    console.log(URLS.BASE)
    browser.get(URLS.BASE);
    browser.sleep(2000);
  });

  it('should open popup for login when click on on basic auth link', function () {
    // To click the 2nd selector
    $$('#content > ul > li:nth-child(2) > a').click();
    //let username = 'admin';
    browser.sleep(2000);
    console.log('WAKE UP!')

    /*var EC = protractor.ExpectedConditions;
    // Waits for an alert pops up.
    browser.wait(EC.alertIsPresent(), 5000).then(function () {
      console.log('WAKE UP AGAIN!')
      let alert = browser.driver.switchTo().alert();
      alert.sendKeys("blabla")
      alert.authenticateAs("zebra", "kon")
      console.log('should have sent keys!')
    })
    
    //  console.log(typeof alert.getElementById)
     // console.log(typeof alert.authenticateUsing) 
     //console.log(Object.keys(alert))
    // 
    //alert.log("admin");
    //console.log("Alert accepted"); 
  
    module.exports = function(){
      this.saveAndReturnGuid = saveAndReturnGuid;*/

    it('should open popup for login when click on on basic auth link', function () {
      let login;
      return login.cancel.click().then(function (alertText) {
        browser.wait(function () {
          return browser.switchTo().alert().then(
            function () { return true; },
            function () { return false; }
          );
        }, 3000);
        var popupAlert = browser.switchTo().alert();
        alertText = popupAlert.getText();
        popupAlert.dismiss();
        return alertText;
      });
    });
  })
});


