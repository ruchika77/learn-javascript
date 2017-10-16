'use strict';

const Jasmine = require('jasmine');

var jasmine = new Jasmine();
jasmine.loadConfigFile('./support/jasmine.json');
jasmine.execute();
jasmine.onComplete(() => done());

function done() {
    console.log('Test executed');
}

