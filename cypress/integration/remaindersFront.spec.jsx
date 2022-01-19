describe('Remainders ', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000');
    })
    it('page can be opened', function() {
        cy.contains('Muistutusten');
        cy.contains('Riveria');
    })

    it('kirjautuminen toimii', function() {
        // cy.contains('Kirjaudu').click();
        cy.get('#username').type('Matti Möttönen');
        cy.get('#password').type('tosisalainen');
        cy.get('#login').click();
        cy.contains('Olet nyt kirjautunut');
    })

    it('verkkoyhteys toimii', function() {
        cy.visit('https://localhost:8888/healthz');
        cy.contains('operational')
    })
    it('token vanhenee', function() {

    })
})