describe.skip("Mocking an API request", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.intercept(
      "GET",
      `${Cypress.env(
        "demoQA"
      )}/Account/v1/User/7d01de84-9527-4855-a10c-043a637178b3`,
      // { fixture: "mockData.json" }
      // { fixture: "mocks/loginMockBody.json" }
      { fixture: "../../src/mocks/loginMockBody.json" }
    ).as("mockdemo");
  });

  it("mocking data", () => {
    cy.login("test", "Test1234*");
    cy.wait("@mockdemo");
    cy.get("#userName-value").should("have.text", "Thomas");
  });
});
