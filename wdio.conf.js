exports.config = {

 user: 'asos_cpt',
 key: '0a08f159-91e7-40a0-ba08-9c9e2cb3d4ea',
 sauceConnect: false,

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
    ],

    maxInstances: 10,

    capabilities: [{

        maxInstances: 5,

        browserName: 'chrome'
    }],

    sync: true,

    logLevel: 'silent',

    coloredLogs: true,

    deprecationWarnings: true,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['sauce'],

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd'
    },

    beforeTest: () => {
      const chai = require('chai');
      const chaiWebdriver = require('chai-webdriverio').default;
      chai.use(chaiWebdriver(browser));
      global.assert = chai.assert;
    },
}
