class Login
{

    txtUsername = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnClickLogin = "button[type='submit']";
    txtDashboardHeader = ".oxd-topbar-header-breadcrumb > .oxd-text";

    SetUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    SetPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    ClickLogin(){
        cy.get(this.btnClickLogin).click();
    }

    VerifyLogin(){
        cy.get(this.txtDashboardHeader).should('have.text','Dashboard')
    }

    LoginPageAuto(username, password){
        cy.get(this.txtUsername).type(username);
        cy.get(this.txtPassword).type(password);
        cy.get(this.btnClickLogin).click();
        cy.get(this.txtDashboardHeader).should('have.text','Dashboard')
    }
}

export default Login;