describe("Date picker describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/date-picker`);
  });

  it("Date Picker Demo", () => {
    cy.get("input#datePickerMonthYearInput").click();
    cy.get("select.react-datepicker__month-select").select("9");
    cy.get("select.react-datepicker__year-select").select("1990");
    // cy.get(".react-datepicker__day--031").click();
    // cy.contains("31").click();

    // using additional cypress-testing-library plugin
    cy.findByText("31").click();
    cy.get("#datePickerMonthYearInput").should("have.value", "10/31/1990");
  });
});
