var SuperHomePage = require('./superHomePage'),
    ResultsPage = require('./resultsPages/resultsPage'),
    YachtPage = require('./resultsPages/yachtPage');

var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'super-home': SuperHomePage,
            'results': ResultsPage,
			'yacht' :YachtPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;
