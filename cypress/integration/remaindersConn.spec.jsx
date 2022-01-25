describe('Remainders ', function() {
    it('verkkoyhteys toimii', function() {
        cy.visit('https://localhost:8888/healthz');
        cy.contains('operational')
    })
})