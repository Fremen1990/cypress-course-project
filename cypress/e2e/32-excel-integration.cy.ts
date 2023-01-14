describe("Excel playground", () => {
  it("read data from excel", () => {
    cy.parseXlsx("cypress/fixtures/excelData.xlsx").then((jsondata) => {
      cy.log(jsondata);
      cy.log(jsondata[0].data);
      let data: [] = jsondata[0].data;
      let dataLength = data.length;

      data.forEach((row) => {
        cy.log(row[0]);
        cy.log(row[1]);
      });

      data.forEach((row) => {
        cy.writeFile("cypress/fixtures/excelData.json", {
          username: row[0],
          password: row[1],
        });
      });
    });
  });
});
