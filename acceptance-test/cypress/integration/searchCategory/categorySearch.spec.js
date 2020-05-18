/// <reference types="cypress" />

describe('category search', () => {
  it('should work', () => {
    cy.visit('/');
    cy.get('select').select('Condiments')
    cy.get(`.card`).should(card => {
      expect(card).to.have.length(5);
    });
  });
});
