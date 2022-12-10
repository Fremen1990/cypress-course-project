describe("empty spec", () => {
  before(() => {
    cy.log("hello from the before hook");
  });

  beforeEach(() => {
    cy.log("hello from the beforeEach hook");
  });

  afterEach(() => {
    cy.log("hello from the afterEach hook");
  });

  after(() => {
    cy.log("hello from the after hook");
  });

  it("testcase #1", () => {
    cy.log("hello world!");
  });
  it("testcase #2", () => {
    cy.log("hello world!");
  });
  it.skip("testcase #3", () => {
    cy.log("hello world!");
  });
  it.only("testcase #4", () => {
    cy.log("hello world!");
  });
});
