
var expect=require('chai').expect;
browser.windowHandleSize({width: 768, height: 1024});



class visualRegression {


    imageDiffrance(results) {
        var titel=browser.getTitle();
        console.log(titel);
        results.forEach((result, titel) => expect(result.isExactSameImage, 'image' + titel + 'is not same:').to.be.true);
    }
}

module.exports=new visualRegression();