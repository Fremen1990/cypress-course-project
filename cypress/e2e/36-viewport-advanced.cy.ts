import { isMobile } from "../support/utils";

describe("Viewport iteration", () => {
  const viewportToTest: Cypress.ViewportPreset[] = [
    "iphone-3",
    "ipad-2",
    "macbook-15",
  ];

  viewportToTest.forEach((viewport) => {
    it("viewport", () => {
      cy.viewport(viewport);
    });
  });
});

describe("Hybrid suite", () => {
  it("Main Menu Test", () => {
    cy.log("desktop validation");
    if (isMobile()) {
      cy.log("this is a mobile validation");
    }
  });
});
