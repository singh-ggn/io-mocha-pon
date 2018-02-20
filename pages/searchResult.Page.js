//var assert=require('chai').assert();
class searchResult{
    get searchResultHdr()   {return $('#product-listing-page > div > div.M083.search-results > p');}
    get selectProductSRP()  {return $('#product-listing > div > form > ol > li:nth-child(3)');}


    // isSearchResultPageDisplayed(function(){
    //   brower.getTitle();
    //   //assert(browser.getTitle).to.e
    //   //expect(brower.getTitle(),"-registration failed-").
    // });
}

module.exports=new searchResult();
