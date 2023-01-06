describe("Iframe example in a  Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
  });

  it("Simple and nested frame", () => {
    cy.get("#frame1").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).should("have.text", "Parent frame");
      cy.wrap($body)
        .find("iframe")
        .then(function ($childIframe) {
          const $childBody = $childIframe.contents().find("body");
          cy.wrap($childBody).find("p").should("have.text", "Child Iframe");
        });
    });
  });
});

describe("Typing on an Iframe using the InterApp", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/iframe`);
  });

  it("Iframe Demo", () => {
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find("p").type("{selectAll}{del}Hello World My Friends!!");
    });
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find("p").should("have.text", "Hello World My Friends!!");
    });
  });
});
