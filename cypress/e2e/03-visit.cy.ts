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
      expect(url).to.contain("/textinput");
    });
  });

  it("title validation", () => {
    cy.title().then((title) => {
      cy.log("TITLE: " + title);
      expect(title).to.be.equal("Text Input");
    });
  });

  it("Input Challange", () => {
    cy.get("input#newButtonName").type("TEST");
    cy.get("button#updatingButton").click().should("have.text", "TEST");
  });
});
