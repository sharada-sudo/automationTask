/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import homePage from './homePage'
import skyNews from './homePage'


Given('Valid Url of SkyNews webpage', () => {
    homePage.loadHomePage();
})

Then('I should see browser title as The Latest News from the UK and Around the World | Sky News', () => {
    homePage.browserTitle();
})

When('I successfully browse SkyNews page in chrome', () => {
    homePage.loadHomePage();
})

Then('I should see number of categories is equal to 15', () => {
    homePage.categoriesNumbers();
})

And('I should also see Category Names', () => {
    homePage.categoriesNames();
})

When('I successfully browse SkyNews page in chrome', () => {
    homePage.loadHomePage();
})
Then('I should be able to see home category should be highlighted and its content should be displayed', () => {
    homePage.defaultFocusOnHome();
})

Given('Valid Url of SkyNews webpage', () => {
    homePage.loadHomePage();
})
When('I Click on Climate Category', () => {
    homePage.clickOnClimate();
})
Then('I should see Climate category should be highlighted and its content should be displayed', () => {
    homePage.focusOnClimate();
})


Given('Valid Url of SkyNews webpage', () => {
    homePage.loadHomePage();
})
When('I Click on any story of my choice', () => {
    homePage.selectedStoryFromHomePage();

})
Then('I should see the story title on the browser title', () => {
    homePage.stringMatchesToTitle();
})
And('Url should also cointain the path of same story as selected', () => {
    homePage.stringMatchesToUrl();
})