var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I set filter '(.+)' to '(.+)'$/, function (f, v) {
		return this.pageFactory.currentPage.setFilterToValue(f, v);
  	});

	Then(/^filter '(.+)' with value '(.+)' should be applied$/, function (f, v) {
        return this.pageFactory.currentPage.isFilterApplied(f, v)
			.then((res) => {
				return expect(res).to.equal(true);
			});
    });

	When(/^I click on '(.+)' yacht$/, function (yacht) {
        return this.pageFactory.currentPage.clickOnYacht(yacht)
		.then(()=>{
			return this.browserUtils.changePage('yacht');
		});
    });

});
