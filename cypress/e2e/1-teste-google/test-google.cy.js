describe('Site Google.com', () => {

    //Test 1
    it('Functioneaza cu o cautare basic', () => {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('youtube').type('{enter}');

        cy.get('#result-stats').should('exist');
    })

})