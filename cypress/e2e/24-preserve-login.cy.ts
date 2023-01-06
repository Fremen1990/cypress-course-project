Cypress.session.clearAllSavedSessions;

describe("Basics Login", () => {
  beforeEach(() => {
    cy.session("mySession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get("#userName").type("test");
      cy.get("#password").type("Test1234*");
      cy.get("#login").click();
      cy.url().should("contain", "profile");
    });
  });

  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});

describe.only("Login with saved session programatically with API Login", () => {
  before(() => {
    cy.session("mySessionProgramatically", () => {
      cy.request({
        method: "POST",
        url: "https://demoqa.com/Account/v1/Login",
        body: { userName: "test", password: "Test1234*" },
      }).then(({ body }) => {
        window.localStorage.setItem("authToken", body.token);
      });
    });
  });

  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});
