describe.skip("Dealing with links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);
  });

  it.skip("First approach, not click on the link", () => {
    cy.get("#simpleLink").should("have.attr", "href", "https://demoqa.com");
    cy.get("#simpleLink").should("have.attr", "target", "_blank");
  });

  it("Second approach, remove the target", () => {
    cy.get("#simpleLink").invoke("removeAttr", "target").click();
    cy.url().then((url) => {
      expect(url).to.be.equal("https://demoqa.com/");
    });
  });
});

describe("Intercepting API(SPYING) requests after clicking on a button", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/links`);

    cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("linkStatus");
  });

  it("First approach, not click on the link", () => {
    cy.get("a#created").click();
    cy.wait("@linkStatus").then((request) => {
      cy.log("request intercepted", request);
      expect(request.response.statusCode).to.be.equal(201);
      expect(request.response.statusMessage).to.be.equal("Created");
    });
  });
});
