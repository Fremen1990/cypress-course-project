describe("basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit explanation - text input", () => {
    cy.log("Hello from it");
  });
  it("visit url and return it to log", () => {
    cy.url().then((url) => {
      cy.log("Hello from url: " + url);
    });
  });
});
// TODO  Section 4.  -  29. cy.url and BDD assertion
