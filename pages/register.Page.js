class register{
    get regsiterTitle()         {return $('#registerTitle > option:nth-child(2)');}
    get regsiterFirstName()     {return $('#registerFirstName');}
    get regsiterLastName()      {return $('#registerLastName');}
    get regsiterEmail()         {return $('#registerEmail');}
    get regsiterPassword()      {return $('#registerPassword');}
    get regsiterConfirmPwd()    {return $('#registerConfirmPassword');}
    get regsiterPhone()         {return $('#registerPhone');}
    get gotoHomePage()          {return $('#asos-logo');}
    get regsiterCreateActBtn()  {return ('//*[@value="Create account" and @type="submit"]');}

}
module.exports=new register();
