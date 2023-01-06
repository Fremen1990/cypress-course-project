describe("Tooltips describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
  });

  it.skip("Tooltip Button", () => {
    cy.get("button#toolTipButton").realHover();
    // cy.get(`div[role='tooltip']`);
    cy.get(".tooltip-inner").should(
      "have.text",
      "You hovered over this Button"
    );
  });

  it("A tag tooltip", () => {
    cy.contains("a", "Contrary").realHover();
    cy.get(".tooltip-inner").should(
      "have.text",
      "You hovered over the Contrary"
    );
  });
});
