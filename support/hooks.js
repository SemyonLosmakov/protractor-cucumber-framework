var { defineSupportCode } = require("cucumber");

defineSupportCode(function({ registerHandler, After, Before}) {
  registerHandler("BeforeFeature", { timeout: 10 * 1000 }, function() {
	console.log("Before feature hook executed...");
  });

  After(function(scenario) {
    console.log("After hook!");
	var _this = this;
	browser.takeScreenshot()
		.then((png) => {
		  _this.browserUtils.writeScreenShot(png, 'last_result.png');
		});
    return _this.browserUtils.returnToMainWindow()
        .then(function(){
            return _this.browserUtils.clearLocalStorage();
        });
  });

  Before(function() {
	console.log("Before hook executed...");
  });
});

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});
