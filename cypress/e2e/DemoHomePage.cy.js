import Login from "../PageObjectMethod/LoginPage"

describe('Demo Home Page',() => {

    const ln = new Login();

    it('OrageHRM Home - User Login Validation',() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangeHRM').then((data)=>{

            ln.LoginPageAuto(data.username, data.password);
       
        })
    })


    it('OrangeHRM Home - Dashboard Validation', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangeHRM').then((data)=>{

            ln.LoginPageAuto(data.username, data.password);
       
        })

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('be.visible')
        cy.get("img[alt='client brand banner']").should('be.visible')
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text','Time at Work')
        
    })

    it('OrageHRM Home - Admin Dashboard', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangeHRM').then((data)=>{

            ln.LoginPageAuto(data.username, data.password);
       
        })

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })

}) 