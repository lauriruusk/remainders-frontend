describe('Remainders ', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
        cy.get('#username').type('Matti Möttönen');
        cy.get('#password').type('tosisalainen');
        cy.get('#login').click();
    })
    it('sivu avautuu', function() {
        cy.contains('Muistutusten');
        cy.contains('Riveria');
    })

    it('sivulle tulostuu kortit', function() {
        cy.get('.cardContainer').find('.card').its('length').should('eq', 25);
    })

    it('haku toimii', function() {
        cy.get('#ctrl').type('Matti');
        cy.get('#searchbtn').click();
        cy.contains('Matti');
    })
    
    it('token vanhenee', function() {
        // Cypress.config('defaultCommandTimeout', 10000);
        cy.get('#ctrl').type('Matti');
        cy.wait(602000)
        cy.get('#searchbtn').click();
        cy.wait(10000);
        // cy.contains("Istunto vanhentunut");
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Istunto vanhentunut")
        })
        cy.wait(5000);
        cy.contains('Kirjaudu');
    })
})