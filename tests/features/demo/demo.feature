Feature: Demo feature

    @demo
    Scenario Outline: Run first Demo feature
        Given webdriverio page is opened
        When user search with <searchItem>
        Then click on first search result
        Then url should match <ExpectedURL>
        Examples:
            | TestID     | searchItem | ExpectedURL           |
            | Demo_TC001 | wdio       | https://webdriver.io/ |