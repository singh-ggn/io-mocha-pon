class home{
    get globalSearchBox()   { return $('#chrome-search'); }
    get globalSearchBtn()   { return $('//*[@data-testid="search-button-inline"]'); }
    get registerLink()      { return $('#main > div > div.signin-options > div.title.qa-title.with-link > a');}
    get yourAccountLink()   { return $('#chrome-sticky-header > div > div > ul._1OLInBo > li._2F9qY-C._46ucpdl > a > span > svg > path');}
    get greetingMessage()   { return $('#headerWelcomeMsg');}
    get signInlink()        { return $('#headerSignInLink-fear > span.sign-link > a'); }
    get myBag()             { return $('#chrome-sticky-header > div > div > ul._1OLInBo > li:nth-child(3) > a > span > svg');}
}

module.exports=new home();
