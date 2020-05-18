/// <reference types="cypress" />

describe('text search', () => {
  it('should work', () => {
    cy.visit('/');
    cy.get(`input[type='search']`).type('salt');
    cy.get(`.card`).should(card => {
      expect(card).to.have.length(1);
    });
  });
});
