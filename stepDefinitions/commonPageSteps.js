var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Then(/^the title should be '(.+)'$/, function (expText) {
        return this.pageFactory.currentPage.getTitleText()
            .then(function(text){
                return expect(text).to.equal(expText);
            });
    });

    Then(/^the main logo should be visible$/, function () {
        return this.pageFactory.currentPage.isMainLogoVisible()
            .then(function(isVisible){
                return expect(isVisible).to.be.true;
            });
    });

	When(/^I return to the home page$/, function () {
        return this.pageFactory.currentPage.openHomePage()
            .then(()=>{
                return this.browserUtils.changePage('super-home');
            });
    });

});
