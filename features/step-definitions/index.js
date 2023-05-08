const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");
const { expect } = require("chai");
const properties = require("../../properties.json");

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

When("I fill a good email and password", () => {
  const cajaLogIn = $(".cajaLogIn");

  const mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.setValue(properties.GOOD_USERNAME);

  const passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue(properties.GOOD_PASSWORD);
});

When("I try to login", () => {
  $("button=Ingresar").click();
});

Then("I expect to not be able to login", () => {
  $(".notice.alert.alert-danger").waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/, (email, password) => {
  const mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.keys(email);

  const passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password);
});

Then("I expect to see {string}", (error) => {
  $(".notice.alert.alert-danger").waitForDisplayed(5000);
  const alertText = browser.$(".notice.alert.alert-danger").getText();
  expect(alertText).to.include(error);
});

Then("I expect to be able to login", () => {
  browser.waitUntil(5000);
  const text = $(".loginButton.btn.btn-primary").getText();
  expect(text).to.be("Salir");
});
