
describe('Cypress', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should filter results', async () => {
        const param = 'Chuck';
        cy.get('#search')
            .type(param)
            .type('{enter}')
            .trigger('input')
            .get('h3', {timeout: 15000})
            .contains('Chuck');
    });

    it('should have ten elements', () => {
        const param = 'Norris';
        cy.get('#search')
            .type(param)
            .type('{enter}')
            .trigger('input')
            .get('h3', {timeout: 15000})
            .get('.fact-top-content')
            .find('h3')
            .should('have.length', 10);
    });

    it('should have adjust the items per page to five items', () => {
        const param = 'Chuck';
        cy.get('#search')
            .type(param)
            .type('{enter}')
            .trigger('input')
            .get('h3', {timeout: 15000})
            .get('select').select('5')
            .get('.fact-top-content')
            .find('h3')
            .should('have.length', 5);
    });
});
