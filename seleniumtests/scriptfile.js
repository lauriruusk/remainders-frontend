require('chromedriver');
let swd = require('selenium-webdriver');

let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
let { user, pass } = require("./credentials.json");

let tabToOpen = tab.get("http://localhost:3000");
tabToOpen
    .then(function() {
        let findTimeOutP = tab.manage().setTimeouts({ implicit: 2000 });
        return findTimeOutP;
    })
    .then(function() {
        let promiseUsernameBox = tab.findElement(swd.By.css("#username"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
  
        // Step 3 - Entering the username
        let promiseFillUsername =
            usernameBox.sendKeys("Matti Möttönen");
        return promiseFillUsername;
    })
    .then(function () {
        console.log(
            "Username entered successfully"
        );
  
        // Step 4 - Finding the password input
        let promisePasswordBox =
            tab.findElement(swd.By.css("#password"));
        return promisePasswordBox;
    })
    .then(function (passwordBox) {
  
        // Step 5 - Entering the password
        let promiseFillPassword =
            passwordBox.sendKeys("tosisalainen");
        return promiseFillPassword;
    })
    .then(function () {
        console.log(
            "Password entered successfully"
        );
  
        // Step 6 - Finding the Sign In button
        let promiseSignInBtn = tab.findElement(
            swd.By.css("#login")
        );
        return promiseSignInBtn;
    })
    .then(function (signInBtn) {
  
        // Step 7 - Clicking the Sign In button
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })
    .then(function () {
        console.log("Kirjautuminen onnistui!");
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });