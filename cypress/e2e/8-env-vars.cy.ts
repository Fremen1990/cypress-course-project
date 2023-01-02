describe("Environment Variable Demo", () => {
  it("Demo", () => {
    cy.log(`Printing Environment Variable: ${Cypress.env("demoVar")}`);
  });
});
