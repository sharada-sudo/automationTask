Feature: SkyNews Home Page .

    

    @focus
    Scenario: Verify the browser tab’s title.
        Given  Valid Url of SkyNews webpage
        And   I successfully browse SkyNews page in chrome
        Then I should see browser title as The Latest News from the UK and Around the World | Sky News

    @focus
    Scenario: Verify the number of categories displayed and their names
        Given  Valid Url of SkyNews webpage
        And   I successfully browse SkyNews page in chrome
        Then 15 types of category should be displayed
        And their names are Home, UK, world, Politics, US, climate, Science & Tech, Business, Ents & Arts, Travel, Offbeat, Analysis, Opinion, Videos, weather

    @focus
    Scenario: Verify the default focus point is on the Home category
        Given  Valid Url of SkyNews webpage
        And   I successfully browse SkyNews page in chrome
        Then  I should be able to see home category should be highlighted and its content should be displayed 