import Login from "../PageObjectMethod/LoginPage"

describe('OrangeHRM - Admin Dashboard',() => {

    const ln = new Login();

    it('Admin Dashboard Validation',() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.fixture('orangeHRM').then((data)=>{

            ln.LoginPageAuto(data.username, data.password);
       
        })

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })
})