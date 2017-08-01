var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "https://www.tubbber.com",
  capabilities: {
    browserName: process.env.BROWSER
  },
  // multiCapabilities: [
  //       {
  //          name: 'firefox_desktop',
  //          browserName: 'firefox'
  //       },
  //       {
  //           name: 'chrome_desktop',
  //           browserName: 'chrome'
  //       }
  //   ],
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature", "../features/**/*.feature"],
  onPrepare: function() {
    browser.manage().window().maximize();
    global.expect = chai.expect;
  },
  cucumberOpts: {
    strict: true,
    format: ["pretty"],
    require: ["../stepDefinitions/*.js", "../stepDefinitions/**/*.js", "../support/*.js"],
    tags: process.env.TAGS
  }
};
