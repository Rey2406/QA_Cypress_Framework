describe('Categories features', () => {
    it('TC-009: FE | Filter phone categories', () => {
        cy.visit('/')
        cy.contains('Phones').click();
        cy.screenshot();
    });

    it('TC-010: FE | Filter laptops categories', () => {
        cy.visit('/')
        cy.contains('Laptops').click();
        cy.screenshot();
    });

    it('TC-011: FE | Filter monitors categories', () => {
        cy.visit('/')
        cy.contains('Monitors').click();
        cy.screenshot();
    });
});
