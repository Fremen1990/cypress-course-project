describe("Download a file in a  Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });

  it("Download a file", () => {
    cy.get("#downloadButton").click();
    cy.verifyDownload("sampleFile.jpeg");
    cy.verifyDownload("jpeg", { contains: true });
  });
});
