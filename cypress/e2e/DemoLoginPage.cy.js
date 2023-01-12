describe('Login Page', () => {

    it('OrageHRM Login - Page Title Validation', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com")
      cy.title().should('eq','OrangeHRM')
      //cy.get("div[class='page-title']h1").contains("Admin area demo")
      
    })

    it('OrangeHRM Login - Logo and Login Validation',() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("img[alt='company-branding']").should('be.visible')
      cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should('be.visible')
      cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('be.visible')
    })

    it('OrageHRM Login - Login Validation',() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("input[placeholder='Username']").type("admin")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()

      let expName="PaulS CollingsS";

        cy.get(".oxd-userdropdown-name").then( (x) => {
                let actName = x.text()
                //BDD Assertion
                expect(actName).to.equals(expName)

                //TDD Assertion
                assert.equals(actName,expName)
            
        })
        
    })

    it('OrageHRM Login - Login with invalid password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("input[placeholder='Username']").type("admin")
      cy.get("input[placeholder='Password']").type("1qaz123")
      cy.get("button[type='submit']").click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    })

    it('OrageHRM Login - Login with invalid username',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("input[placeholder='Username']").type("admin123")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    })

    
  })