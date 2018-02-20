
var home=require('../../pages/home.Page');
var visualRegression=require('../../pages/visualRegression');
var register=require('../../pages/register.Page');

describe('Visual regression', function () {

    before('Launching application',function () {
        browser.url('/');
    });

    // after('Closing browser',function(){
    //   browser.close();
    // })

    it('HomePage', function () {
        let report=browser.checkElement('body');
        visualRegression.imageDiffrance(report);
    });

    it('LoginPage', function () {
        home.yourAccountLink.click();
        let report=browser.checkElement('body');
        visualRegression.imageDiffrance(report)
    });
    it('RegsiterPage', function () {
        home.registerLink.click();
        let report=browser.checkElement('body');
        visualRegression.imageDiffrance(report)
        register.gotoHomePage.click();
    });
    it('MyBagWithoutSignin', function () {
        home.myBag.click();
        let report=browser.checkElement('body');
        visualRegression.imageDiffrance(report)
        //register.gotoHomePage.click();
    });
});
