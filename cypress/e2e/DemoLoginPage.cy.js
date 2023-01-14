import Login from "../PageObjectMethod/LoginPage" //import the page object class

describe('Login Page', () => {

  const ln = new Login(); //ln meant object reference variable in javaScript

    it('OrageHRM Login - Page Title Validation', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com")
      cy.title().should('eq','OrangeHRM')      
    })

    it('OrangeHRM Login - Logo and Login Validation',() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("img[alt='company-branding']").should('be.visible')
      cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should('be.visible')
      cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('be.visible')
    })

    //using pom method and with fixture file
    it('OrangeHRM Login - Logo and Login Validation',() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      
      /* 
      Here in the Login class method are not mention as static. So if you didn't name as static the method you should access 
      those methods via creating class object in another class.

      If you need to pass the values through the fixture file(like a property file), create fixture method and through that 
      you can able to access the fixture values.
      */
     cy.fixture('orangeHRM').then((data)=>{

     ln.SetUsername(data.username)
     ln.SetPassword(data.password)
     ln.ClickLogin();
     ln.VerifyLogin();

     })
    })

    /*
    it('OrageHRM Login - Login Validation',() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.fixture('orangeHRM').then((data)=>{

      ln.SetUsername(data.username)
      ln.SetPassword(data.password)
      ln.ClickLogin();
      ln.VerifyLogin();

     })

      let expName="PaulS CollingsS";

        cy.get(".oxd-userdropdown-name").then( (x) => {
                let actName = x.text()
                //BDD Assertion
                expect(actName).to.equals(expName)

                //TDD Assertion
                assert.equals(actName,expName)
            
        })
        
    })*/

    it('OrageHRM Login - Login with invalid password',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.fixture('orangeHRM').then((data)=>{
        ln.SetUsername(data.username)
        ln.SetPassword(data.invalidPW)
        ln.ClickLogin();
      })
      cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    })

    it('OrageHRM Login - Login with invalid username',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      
      cy.fixture('orangeHRM').then((data)=>{
        ln.SetUsername(data.invalidUS)
        ln.SetPassword(data.password)
        ln.ClickLogin();
      })
      cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
    })

      
  })