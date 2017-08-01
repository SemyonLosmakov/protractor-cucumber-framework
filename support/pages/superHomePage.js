var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var SuperHomePage = function(world){

    var _this=this;

    _this.world = world;

    _this.marker = 'super-home';

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
			featured: {
                css: '.featuredBoats',
				text: '',
                isSingle: true
            },
            destinationField: {
                css: '.country-field',
                isSingle: true
            },
            countryField: {
                css: '.country',
				text: '',
                isSingle: true
            },
            datePicker: {
                css: '.datePickerField',
                isSingle: true
            },
            datePickerPrevMonth: {
                css: '.calendarHeader>button:first-child',
                isSingle: true
            },
            datePickerNextMonth: {
                css: '.calendarHeader>button:last-child',
                isSingle: true
            },
			datePickerDay: {
                css: '.day',
				text: '',
                isSingle: true
            },
			datePickerMonth: {
                css: '.currentMonths',
                isSingle: true
            },
			durationField: {
                css: '.form-control[ng-model="ctrl.search.duration"]',
                isSingle: true
            },
            guestsField: {
                css: '.form-control[ng-model="ctrl.search.guests"]',
                isSingle: true
            },
            searchButton: {
                css: '#search_button',
                isSingle: true
            }
        }
    };

	_this.setDestination = function(destination){
		var arr = destination.split(", "),
			i = 0;
		var setInnerDestination = function(){
			if(!arr[i]){
				return true;
			}
			_this._data.elements.countryField.text = arr[i];
			return _this.world.helper.elementGetter(_this._root,_this._data.elements.countryField).scrollToAndClick()
			.then(()=>{
				i++;
				setInnerDestination();
			});
		};

		return _this.world.helper.elementGetter(_this._root,_this._data.elements.destinationField).scrollToAndClick()
		.then(()=>{
			setInnerDestination();
		});
	};

	_this.getDestination = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.destinationField).waitReady()
            .then(function(el){
                return el.getText();
            });
    };

	_this.setDate = function(date){
		var day,
			month;
		var getMonthName = function(month){
			var months = {
				'01' : 'Jan',
				'02' : 'Feb',
				'03' :  'March',
				'04' :  'April',
				'05' :  'May',
				'06' :  'June',
				'07' :  'July',
				'08' :  'Aug',
				'09' :  'Sept',
				'10' :  'Oct',
				'11' :  'Nov',
				'12' :  'Dec'
			}
			return months[month];
		};
		var parseDate = function(date) {
			var arr = date.split('/');
			day = arr[0];
			month = getMonthName(arr[1]) + " " +arr[2];
		};
		var setInnerDate = function(){
			return _this.world.helper.elementGetter(_this._root,_this._data.elements.datePickerMonth).waitReady()
				.then(function(el){
					return el.getText();
				})
				.then(function(text){
					if(text === month ){
						_this._data.elements.datePickerDay.text = day;
						return _this.world.helper.elementGetter(_this._root,_this._data.elements.datePickerDay).scrollToAndClick();
					} else {
						return _this.world.helper.elementGetter(_this._root,_this._data.elements.datePickerNextMonth).scrollToAndClick()
							.then(()=>{
								setInnerDate();
							});
					}
				})
		};

        return _this.world.helper.elementGetter(_this._root,_this._data.elements.datePicker).scrollToAndClick()
			.then(()=>{
				parseDate(date);
				setInnerDate();
			});
    };


	_this.getDate = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.datePicker).waitReady()
            .then(function(el){
                return el.getAttribute('value');
            });
    };

	_this.setDuration = function(duration){
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.durationField).selectByValue(duration);
    };

	_this.getDuration = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.durationField).$('option:checked').waitReady()
            .then(function(el){
				return el.getText();
            });
    };

	_this.setGuests = function(guests){
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.guestsField).selectByValue(guests);
    };

	_this.getGuests = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.guestsField).$('option:checked').waitReady()
            .then(function(el){
				return el.getText();
            });
    };

	_this.submitSearch = function(){
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.searchButton).scrollToAndClick();
    };

	_this.clickOnFeatured = function(name){
		_this._data.elements.featured.text = name;
		return _this.world.helper.elementGetter(_this._root,_this._data.elements.featured).scrollToAndClick();
    };

    _this.constructUrlForPage = function(){
    	var deferred = require('q').defer();
        deferred.resolve("browser.baseUrl");
        return deferred.promise;
    };

};

inheritance.inherits(Page,SuperHomePage);

module.exports = SuperHomePage;
