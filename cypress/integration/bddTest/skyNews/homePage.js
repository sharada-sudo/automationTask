class homePage {

    static loadHomePage() {
        cy.visit('https://news.sky.com/')
        cy.url().should('contain', 'news')
    }

    static browserTitle() {
        cy.title()
            .should('eq', 'The Latest News from the UK and Around the World | Sky News')

    }

    static categoriesNumbers() {
        cy.get('ul.sdc-site-header__menu-cell.sdc-site-header__menu-cell--1').children()
            .should(function ($lis) {
                expect($lis).to.have.length(15)
            })
    }

    static categoriesNames() {
        cy.get('ul.sdc-site-header__menu-cell.sdc-site-header__menu-cell--1').children()
            .should(function ($lis) {
                expect($lis.eq(0)).to.contain('Home')
                expect($lis.eq(1)).to.contain('UK')
                expect($lis.eq(2)).to.contain('World')
                expect($lis.eq(3)).to.contain('Politics')
                expect($lis.eq(4)).to.contain('US')
                expect($lis.eq(5)).to.contain('Climate')
                expect($lis.eq(6)).to.contain('Science & Tech')
                expect($lis.eq(7)).to.contain('Business')
                expect($lis.eq(8)).to.contain('Ents & Arts')
                expect($lis.eq(9)).to.contain('Travel')
                expect($lis.eq(10)).to.contain('Offbeat')
                expect($lis.eq(11)).to.contain('Analysis')
                expect($lis.eq(12)).to.contain('Opinion')
                expect($lis.eq(13)).to.contain('Videos')
                expect($lis.eq(14)).to.contain('Weather')

            })

    }


    static defaultFocusOnHome() {
        cy.get('a.sdc-site-header__menu-item-link')
            .eq(0)
            .should('have.attr', 'aria-current')
    }

    static clickOnClimate() {
        cy.get('a.sdc-site-header__menu-item-link').eq(5)
            //.should('not.have.attr','aria-current')
            .click({ force: true })
        cy.url()
            .should('include', '/climate')
    }
    static focusOnClimate() {
        cy.get('a.sdc-site-header__menu-item-link')
            .eq(5)
            .should('have.attr', 'aria-current')
    }

    static selectedStoryFromHomePage() {

        cy.get('span.sdc-site-tile__headline-text')
            .eq(0)
            .invoke('text')
            .then(($firstnews) => {
                const newsLink = $firstnews.split(" ")[0]
                cy.log(newsLink)
                cy.get('a.sdc-site-tile__headline-link').eq(0)
                    .click({ force: true })
                cy.title().should('include', newsLink)

            })
    }


}

export default homePage;


