Feature: SkyNews Home Page .

    @focus
    Scenario: Verify the browser tab’s title.

        Given  Valid Url of SkyNews webpage
        Then I should see browser title as The Latest News from the UK and Around the World | Sky News

    @focus
    Scenario: Verify the number of categories displayed and their names

        When  I successfully browse SkyNews page in chrome
        Then   I should see number of categories is equal to 15
        And     I should also see Category Names


    @focus
    Scenario: Verify the default focus point is on the Home category

        When  I successfully browse SkyNews page in chrome
        Then  I should be able to see home category should be highlighted and its content should be displayed

    @focus
    Scenario: Verify that if the user then clicks on ‘Climate’, this becomes the focus

        Given Valid Url of SkyNews webpage
        When I Click on Climate Category
        Then I should see Climate category should be highlighted and its content should be displayed

    
    @focus
    Scenario: verify dynamic Url Content

        Given Valid Url of SkyNews webpage
        When I Click on any story of my choice
        Then I should see the story title on the browser title
        And Url should also cointain the path of same story as selected