var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	Then(/^the rental price should be '(.+)'$/, function (price) {
        return this.pageFactory.currentPage.getRentalPrice()
			.then((res) => {
				return expect(res).to.equal(price);
			});
    });

	Then(/^the discount should be '(.+)'$/, function (discount) {
        return this.pageFactory.currentPage.getDiscount()
			.then((res) => {
				return expect(res).to.equal(discount);
			});
    });

	Then(/^the total price should be '(.+)'$/, function (total) {
        return this.pageFactory.currentPage.getTotalPrice()
			.then((res) => {
				return expect(res).to.equal(total);
			});
    });

});
