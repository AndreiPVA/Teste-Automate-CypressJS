describe('Exemplu unde...', () => {

    //Test verificare segment din URL
    it('Verific daca un URL contine ceva', () => {
        cy.visit('https://stirileprotv.ro/ultimele-stiri/');

        cy.url().should('include', '/ultimele-stiri/'); //Verifica un segment
    })

    //Test cu delay
    it('Asteapta 10 secunde', () => {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb').click();
        cy.wait(10000); //10 secunde, 1000 = 1 secunda
        
        cy.get('#APjFqb').type('Au trecut 10 secunde');
    })

    //Test cu selector de tip atribut
    it('Selectez folosind un atribut', () => {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb').click();
        
        cy.get('[alt="Google"]').should('be.visible'); //Selector atribut alt + assertion cu visible
    })

    //Test screenshot pagina
    it('Fac un screenshot la pagina', () => {
        cy.visit('https://www.google.com/');

        cy.screenshot(); //Face screenshot intr-un folder default
    })

    //Test constanta si verificare continut input
    it('Verific o valoare din input', () => {
        cy.visit('https://www.google.com/');

        cy.get('#L2AGLb').click();
        const googleSearch = cy.get('.gLFyf'); //Constanta

        googleSearch.type('123');
        googleSearch.should('have.value', '123'); //Assertion contine textul
    })

    //Test verifica existenta unei clase pe un element selectat
    it('Verific o valoare din input', () => {
        cy.visit('https://www.libris.ro/');

        cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); //Exista clasa pe buton?
    })
 
})