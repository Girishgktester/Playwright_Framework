const LoginPage = require('../pages/LoginPage');
const Register = require('../pages/Register');
const Homepage = require('../pages/Homepage');
const Searchpage = require('../pages/Searchpage');
const Cartpage = require('../pages/Cartpage');
const Placeorder = require('../pages/Placeorder');


function getPages(page) {
  return {
    loginPage: new LoginPage(page),
    registerPage: new Register(page),
    homepage: new Homepage(page),
    searchpage : new Searchpage(page),
    cartpage: new Cartpage(page),
    placeorder: new Placeorder(page)
  };
}

module.exports = getPages;
