var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype._commonData = {
	elements: {}
};

Page.prototype.isMainLogoVisible = function(){
	return this.world.helper.elementGetter(this._root,this._data.elements.mainLogo).isDisplayed();
};

Page.prototype.getTitleText = function(){
	return this.world.helper.elementGetter(this._root,this._data.elements.title).waitReady()
		.then(function(el){
			return el.getText();
		});
};

Page.prototype.openHomePage = function(){
	return this.world.helper.elementGetter(this._root,this._data.elements.mainLogo)
	.scrollToAndClick();
};

module.exports = Page;
