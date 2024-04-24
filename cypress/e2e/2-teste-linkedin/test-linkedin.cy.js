describe('Site LinkedIn.com', () => {

    //Test 1
    it('Login', () => {
        cy.visit('https://www.linkedin.com/');
        cy.get('[action-type="ACCEPT"]').click();
        cy.get('.cta-modal__dismiss-btn').click();
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('user@email.com');
        cy.get('#password').type('password');
        cy.get('.btn__primary--large').click();

        cy.get('#captcha-internal').should('exist');
    })

})