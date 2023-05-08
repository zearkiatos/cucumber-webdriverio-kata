const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");
const { expect } = require("chai");

Given("I go to losestudiantes home screen", () => {
  browser.url("/uniandes/");
  if ($("button=Cerrar").isDisplayed()) {
    $("button=Cerrar").click();
  }
});

When("I open the login screen", () => {
  $("button.loginButton").waitForExist(5000);
  $("button.loginButton").waitForDisplayed(5000);
  $("button.loginButton").click();
});

When("I fill a wrong email and password", () => {
  const cajaLogIn = $(".cajaLogIn");

  const mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.setValue("wrongemail@example.com");

  const passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue("123467891");
});

When("I try to login", () => {
  $("button=Ingresar").click();
});

Then("I expect to not be able to login", () => {
  $(".notice.alert.alert-danger").waitForDisplayed(5000);
});
