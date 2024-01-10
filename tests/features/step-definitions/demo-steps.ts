import { Given, When, Then } from "@cucumber/cucumber";

Given(/^webdriverio page is opened$/, async function () {
  await browser.url("https://www.google.com/"); 
  await browser.maximizeWindow();
  await expect(browser).toHaveUrl("https://www.google.com/");
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
  await expect(browser).toHaveUrl(ExpectedURL);

  console.log(`>>>>>>Expected URL is:  ${ExpectedURL}`);
});
