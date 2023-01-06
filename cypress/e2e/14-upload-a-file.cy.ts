describe("Upload a file in a  Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it("Upload a file", () => {
    cy.get("input#uploadFile").attachFile("example.json");

    cy.get("#uploadedFilePath").should("contain", "example.json");
  });
});
