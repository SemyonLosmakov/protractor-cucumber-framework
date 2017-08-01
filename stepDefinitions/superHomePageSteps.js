var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When(/^set the destination '(.+)'$/, function (destination) {
        return this.pageFactory.currentPage.setDestination(destination);
    });

    Then(/^the destination should be '(.+)'$/, function (destination) {
        return this.pageFactory.currentPage.getDestination()
            .then((text) => {
                return expect(text).to.equal(destination);
            });
    });

	When(/^set the date '(.+)'$/, function (date) {
        return this.pageFactory.currentPage.setDate(date);
    });

	Then(/^the date should be '(.+)'$/, function (date) {
        return this.pageFactory.currentPage.getDate()
            .then((text) => {
                return expect(text).to.equal(date);
            });
    });

	When(/^set the duration '(.+)'$/, function (duration) {
        return this.pageFactory.currentPage.setDuration(duration);
    });

	Then(/^the duration should be '(.+)'$/, function (duration) {
        return this.pageFactory.currentPage.getDuration()
            .then((text) => {
                return expect(text).to.equal(duration);
            });
    });

	When(/^set the guests '(.+)'$/, function (guests) {
        return this.pageFactory.currentPage.setGuests(guests);
    });

	Then(/^the guests should be '(.+)'$/, function (guests) {
        return this.pageFactory.currentPage.getGuests()
            .then((text) => {
                return expect(text).to.equal(guests);
            });
    });

	When(/^I click on '(.+)'$/, function (name) {
        return this.pageFactory.currentPage.clickOnFeatured(name)
		.then(()=>{
			return this.browserUtils.changePage('results');
		});
    });

	When(/^I submit search$/, function () {
        return this.pageFactory.currentPage.submitSearch()
		.then(()=>{
			return this.browserUtils.changePage('results');
		});
    });

});
