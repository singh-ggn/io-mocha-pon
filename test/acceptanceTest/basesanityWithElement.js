
var home=require('../../pages/home.Page');
var register=require('../../pages/register.Page');
var login=require('../../pages/login.Page');

var customerEmail="AutoTest"+Date.now()+"@test.com";
console.log('customer email--'+customerEmail);

describe("Validate Customer profile update with Element", function(){

    beforeEach(function () {
        browser.url('/');
    });

    afterEach(function () {
        browser.deleteCookie();
        browser.close;
    });

 it('Customer should able to Register',function () {
     home.registerLink.click();
     register.regsiterTitle.click();
     register.regsiterFirstName.setValue('AutoTest');
     register.regsiterLastName.setValue('Singh');
     register.regsiterEmail.setValue(customerEmail);
     register.regsiterPassword.setValue('test12345');
     register.regsiterConfirmPwd.setValue('test12345');
     register.regsiterPhone.setValue('07459275316');
     browser.submitForm('//*[@value="Create account" and @type="submit"]');

     home.yourAccountLink.waitForVisible(5000);
     expect(home.yourAccountLink.getText(),"-registration failed-").to.equal('YOUR ACCOUNT');
     expect(home.greetingMessage.getText(),"-user name is not matching-").to.equal('AutoTest');
     console.log('registeration done')
    });

 it('Customer should able to login from TopNav ', function () {
     home.signInlink.click();
     login.enterUserID.setValue(customerEmail);
     login.enterPassword.setValue('test12345');
     browser.submitForm('//*[@value="Sign in" and @type="submit"]');

     home.yourAccountLink.waitForVisible(5000);
     expect(home.yourAccountLink.getText(),"-registration failed-").to.equal('YOUR ACCOUNT');
     expect(home.greetingMessage.getText(),"-user name is not matching-").to.equal('AutoTest');

    });

});
