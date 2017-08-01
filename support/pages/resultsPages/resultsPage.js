var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var ResultsPage = function(world){
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
			filters: {
                css: 'search-filter ul li',
				text: '',
                isSingle: true
            },
			yacht: {
                css: '.search-result',
				text: '',
                isSingle: true
            },
			tiles: {
				css: '.unfilterButton',
				text: '',
				isSingle: false
			}
		}
    };

	_this.setFilterToValue = function(filter, value){
		_this._data.elements.filters.text = filter;
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.filters)
		.all(by.cssContainingText('.control', value)).first()
		.scrollToAndClick();
	};

	_this.isFilterApplied = function(filter, value){
		_this._data.elements.tiles.text = value;
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.tiles)
            .then(function(el){
                return el[1].getText();
            })
            .then(function(text){
                return text === value || (text.indexOf(filter)>=0 && text.indexOf(value)>=0) || (text.indexOf('(ft)')>=0 && text.indexOf(value)>=0);
            });
    };

	_this.clickOnYacht = function(yacht){
		_this._data.elements.yacht.text = yacht;
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.yacht)
		.scrollToAndClick();
	};

};

inheritance.inherits(Page,ResultsPage);

module.exports = ResultsPage;
