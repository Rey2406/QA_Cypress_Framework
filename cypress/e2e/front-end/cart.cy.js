describe('Cart features', () => {
    
    beforeEach(() => {
        cy.visit('/');  //baseUrl variable declared in cypress.config.js
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get(':nth-child(4) > .nav-link').click();
    });
    
    it('TC-007: FE | Add new product to cart', () => {
        cy.get('.success > :nth-child(1) > img').should('be.visible');
        cy.screenshot();
    });

    it('TC-008: FE | Delete product to cart', () => {
        cy.get('.success > :nth-child(4) > a').click();
        cy.get('.success > :nth-child(1) > img').should('not.exist');
        cy.screenshot();
    });
});