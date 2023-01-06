describe("Autocomplete explanation", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
  });

  it("Autocomplete demo using Yellow", () => {
    cy.get(".auto-complete__value-container").first().click().type("Y");
    cy.contains("#react-select-2-option-0", "Yellow").click();
    //   react-select-2-option-0
    cy.get(".auto-complete__multi-value__label").should("have.text", "Yellow");
  });
});
