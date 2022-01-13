describe('Remainders ', function() {
    it('page can be opened', function() {
        cy.visit('http://localhost:3000');
        cy.contains('Muistutukset');
        cy.contains('Riveria');
    })
})