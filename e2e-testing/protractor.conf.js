exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./herokuapp/page-form-authentication.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {

            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory':  '/Users/ruchika.mehta/Ruchika_Learning/learn-javascript/src'
                }
            }
        }
    },
    onPrepare: function () {
        /**
         * If you are testing against a non-angular site - set ignoreSynchronization setting to true
         *
         * If true, Protractor will not attempt to synchronize with the page before
         * performing actions. This can be harmful because Protractor will not wait
         * until $timeouts and $http calls have been processed, which can cause
         * tests to become flaky. This should be used only when necessary, such as
         * when a page continuously polls an API using $timeout.
         *
         * @type {boolean}
         */
        browser.ignoreSynchronization = true;
    },
};
