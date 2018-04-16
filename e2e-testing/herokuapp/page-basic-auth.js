describe('AB Testing', function() {
    it('should open the link for herrokuapp', function() {
      browser.get('http://the-internet.herokuapp.com/');
      browser.sleep(2000);
    });


    it('should click on Basic Auth', function(){
        $$('#content > ul > li:nth-child(2) > a').click()
        browser.sleep(2000);
    })
  });