Cypress.session.clearAllSavedSessions;

import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";

describe("Basics Login", () => {
  beforeEach(() => {
    // cy.visit(`${Cypress.env("demoQA")}/login`);

    LoginPage.visit();
  });

  it("Success Login Scenario", () => {
    // cy.get("#userName").type("test");
    // cy.get("#password").type("Test1234*");
    // cy.get("#login").click();

    // Quick method
    // LoginPage.submitLogin("test", "Test1234*");

    LoginPage.usernameElement.type("test");
    LoginPage.passwordElement.type("Test1234*");
    LoginPage.loginElement.click();

    cy.url().should("contain", "profile");
    // cy.get("div[class='main-header']").should("have.text", "Login");
    ProfilePage.headerElement.should("have.text", "Profile");
    // cy.get("#userName-value").should("have.text", "test");
    LoginPage.userElement.should("have.text", "test");
  });

  it("Wrong User Login Scenario", () => {
    // cy.get("#userName").type("wrongUser");
    // cy.get("#password").type("wrongPassword");
    // cy.get("#login").click();

    LoginPage.submitLogin("wrongUser", "wrongPassword*");

    cy.url().should("not.contain", "profile");

    LoginPage.invalidMessageElement.should(
      "have.text",
      "Invalid username or password!"
    );

    // cy.get("div[class='main-header']").should("have.text", "Login");
    LoginPage.headerElement.should("have.text", "Login");
  });
});
