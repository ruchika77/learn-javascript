const { URLS } = require('./app.config');
console.log(URLS);
describe('Basic Auth', function () {
  it('should open the link for herrokuapp', function () {
    // opens the home page of the app
    browser.get(URLS.BASE);
    browser.sleep(2000);
  });

  it('should open popup for login when click on on basic auth link', function () {
    // To click the 2nd selector
    $$('#content > ul > li:nth-child(2) > a').click();
    let username = 'admin';
    browser.sleep(2000);
  });
});