describe('Demo Home Page',() => {

    it('OrageHRM Home - User Login Validation',() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

    })

    it('OrangeHRM Home - Dashboard Validation', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('be.visible')
        cy.get("img[alt='client brand banner']").should('be.visible')
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Time at Work')
        
    })

    it('OrageHRM Home - Admin Dashboard', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })

}) 