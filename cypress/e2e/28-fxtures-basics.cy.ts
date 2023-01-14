import { testData } from "./model";

describe("Using a fixture", () => {
  it("Loading the file and display the data in the log", () => {
    cy.fixture("jsonExample").then((testData: testData) => {
      cy.log("Print obj: ", testData);
      cy.log("Print obj: ", testData.property1);
      cy.log("Print obj: ", testData.property2);
    });
  });
});
