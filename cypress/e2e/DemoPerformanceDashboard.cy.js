import Login from "../PageObjectMethod/LoginPage"

describe('OrangeHRM - Performance Dashboard', () => {
    it('Performance Dashboard Validation', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangeHRM').then((data)=>{

            ln.LoginPageAuto(data.username, data.password);
       
        })

        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
    })
})