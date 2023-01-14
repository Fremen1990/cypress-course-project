import { User } from "./model";

describe("Array of Objects - Users", () => {
  it("Getting user information based on my fixtures", function () {
    cy.fixture<{ users: User[] }>("example.json")
      .its("users")
      .then((users) => {
        users.forEach((user) => {
          cy.visit(`${Cypress.env("demoQA")}/login`);

          // cy.log(user.username);
          // cy.log(user.password);

          cy.login(user.username, user.password);
          if (user.valid) {
            cy.url().should("contain", "profile");
          } else {
            cy.url().should("contain", "login");
          }

          cy.clearCookies();
          cy.clearLocalStorage();
        });
      });
  });
});
