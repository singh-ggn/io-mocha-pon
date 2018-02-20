var home=require('../../pages/home.Page');
var searchResult=require('../../pages/searchResult.Page');

describe("Validate customer is able to add to Bag", function () {

    beforeEach(function () {
        browser.url('/');
    });


    it('add jeans as product into Bag ', function () {
        home.globalSearchBox.click();
        home.globalSearchBox.setValue('jeans');
        home.globalSearchBtn.click();
        searchResult.searchResultHdr.waitForVisible(5000);

        var isSearchHeader=browser.isVisible('p=Search results for jeans');
        expect(isSearchHeader).to.be.true;

    });
});