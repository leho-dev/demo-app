describe('Demo Testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Page loaded', () => {
    cy.get('button').click();
    cy.contains('Vite + React');
  });
});
