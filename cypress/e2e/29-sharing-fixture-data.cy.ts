import { testData } from "./model";

describe("Sharing my fixture", () => {
  beforeEach(function () {
    cy.fixture("jsonExample").as("testData");
  });

  it("Accessing the shared fixture#1", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("Print", testData.property1);
    });
  });
  it("Accessing the shared fixture#2", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("Print", testData.property1);
    });
  });
  it("Accessing the shared fixture#3", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("Print", testData.property1);
    });
  });
});
