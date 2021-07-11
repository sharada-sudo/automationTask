/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import homePage from './homePage'



//First case

Given('Valid Url of SkyNews webpage', () => {
    homePage.loadHomePage();
})

Then('I should see browser title as The Latest News from the UK and Around the World | Sky News', () => {
    homePage.browserTitle();
})

//Second case

When('I successfully browse SkyNews page in chrome', () => {
    homePage.loadHomePage();
})

Then('I should see number of categories is equal to 15', () => {
    homePage.categoriesNumbers();
})

And('I should also see Category Names', () => {
    homePage.categoriesNames();
})

//Third case

When('I successfully browse SkyNews page in chrome', () => {
    homePage.loadHomePage();
})
Then('I should be able to see home category should be highlighted and its content should be displayed', () => {
    homePage.defaultFocusOnHome();
})

//Fourth case

Given('Valid Url of SkyNews webpage', () => {
    homePage.loadHomePage();
})
When('I Click on Climate Category', () => {
    homePage.clickOnClimate();
})
Then('I should see Climate category should be highlighted and its content should be displayed', () => {
    homePage.focusOnClimate();
})

//Fifth case

When('I successfully browse SkyNews page in chrome  ', () => {
    homePage.loadHomePage()

})

Then('I Click on any story of my choice with string selected ,the same string on the browser title', () => {
    homePage.selectedStoryFromHomePage();
})
