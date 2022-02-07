describe('Lighthouse ', () => {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
        cy.get('#username').type('Matti');
        cy.get('#password').type('Itikka2022');
        cy.get('#login').click();
    })

    it('should run performance audits', () => {
        cy.lighthouse();
    })
})