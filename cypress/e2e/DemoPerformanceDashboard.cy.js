describe('OrangeHRM - Performance Dashboard', () => {
    it('Performance Dashboard Validation', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
    })
})