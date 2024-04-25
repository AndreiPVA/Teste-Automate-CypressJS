describe('Site Saucedemo.com', () => {

    //Test 1
    it('Test login cu user sau parola gresita', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('user');
        cy.get('[data-test="password"]').type('password');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('be.visible');
    })

    //Test 2
    it('Test login cu userul standard', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html');
    })

    //Test 3
    it('Test logout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.get('[data-test="logout-sidebar-link"]').click();

        cy.get('#login_button_container').should('exist');
    })

    //Test 4
    it('Test deschidere si inchidere meniu lateral', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.get("#react-burger-cross-btn").click();

        cy.get('.bm-item-list').should('not.be.visible');
    })

    //Test 5
    it('Test de adaugare a unui produs in cos', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="inventory-item"]').should('exist');
    })

    //Test 6
    it('Test de stergere a unui produs din cos', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        cy.get('[data-test="inventory-item"]').should('not.exist');
    })

    //Test 7
    it('Test de verificare daca se poate comanda un produs', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("Andrei");
        cy.get('[data-test="lastName"]').type("Vasile");
        cy.get('[data-test="postalCode"]').type("51234");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

        cy.url().should('include', '/checkout-complete.html');
    })

    //Test 8
    it('Test de verificare daca se poate accesa pagina cu detaliile unui produs', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();

        cy.url().should('include', '/inventory-item.html?id=4');
    })

    //Test 9
    it('Test de verificare daca butonul "Back to products" de pe pagina unui produs duce la pagina principala', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.url().should('include', '/inventory.html');
    })
    
})