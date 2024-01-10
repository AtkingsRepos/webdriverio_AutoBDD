import { Given, When, Then } from "@cucumber/cucumber";
import * as chai from "chai";
import { expect } from "chai";
//const expect = chai.expect;

Given(/^webdriverio page is opened$/, async function () {
  await browser.url("https://www.google.com/");
  await browser.maximizeWindow();
  const currentURL = await browser.getUrl();
  expect(currentURL).to.equal("https://www.google.com/");
  await browser.$('//*[@id="W0wltc"]/div').click();
  await browser.$("#APjFqb").click();
});

When(/^user search with (.*)$/, async (searchItem) => {
  await browser.$("#APjFqb").setValue(searchItem);
  //await browser.pause(2000);
  await browser.keys("Enter");
});

Then(/^click on first search result$/, async () => {
  await browser.$("//div[@class='yuRUbf']//h3").click();
});

Then(/^url should match (.*)$/, async (ExpectedURL) => {
  const actualURL = await browser.getUrl();
  chai.assert.equal(actualURL, ExpectedURL);
  expect(actualURL).to.equal(ExpectedURL);
  console.log(`>>>>>>Expected URL is:  ${ExpectedURL}`);
  console.log(`>>>>>>ActualURL URL is:  ${actualURL}`);
});
