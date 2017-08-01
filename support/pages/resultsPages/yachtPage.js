var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var YachtPage = function(world){
    var _this = this;

    _this.world = world;

    _this.marker = 'results';

    _this._data = {
        elements: {
			mainLogo: {
                css: '.logo',
                isSingle: true
            },
            title: {
                css: 'h1',
                isSingle: true
            },
            rentalPrice: {
                css: '.rentalPrice>span:last-child',
                isSingle: true
            },
            discountPrice: {
                css: '.discountPrice>span:last-child',
                isSingle: true
            },
            totalPrice: {
                css: '.totalPrice>span:last-child',
                isSingle: true
            }
		}
    };

	_this.getRentalPrice = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.rentalPrice).waitReady()
            .then(function(el){
                return el.getText();
            });
    };

	_this.getDiscount = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.discountPrice).waitReady()
            .then(function(el){
                return el.getText();
            });
    };

	_this.getTotalPrice = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.totalPrice).waitReady()
            .then(function(el){
                return el.getText();
            });
    };

};

inheritance.inherits(Page,YachtPage);

module.exports = YachtPage;
