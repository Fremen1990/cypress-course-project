describe("Click Challange", () => {
  beforeEach(() => {
    cy.visit("/click");
  });

  it("class assertions", () => {
    cy.get("#badButton").click().should("have.class", "btn-success");
  });

  it("background assertion", () => {
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});

describe.skip("Hover Challange", () => {
  beforeEach(() => {
    cy.visit("/mouseover");
  });

  it("hover with cypress workaround", () => {
    cy.get(".text-primary").trigger("mouseover");
  });

  it("hover with real hover element", () => {
    cy.get(".text-primary").realHover();
  });
});

describe.only("Dynamic Table Challange", () => {
  beforeEach(() => {
    cy.visit("/dynamictable");
  });

  it("Chrome CPU Test", () => {
    cy.get(`div[role="row"] span`).each(($cell) => {
      // cy.log($cell.text());
      if ($cell.text().includes("Chrome")) {
        cy.log(`I have found the ${$cell.text()} row`);
        let chromeRowValues: string[] = [];
        chromeRowValues.push($cell.next().text());
        chromeRowValues.push($cell.next().next().text());
        chromeRowValues.push($cell.next().next().next().text());
        chromeRowValues.push($cell.next().next().next().next().text());
        cy.log("Chrome row values", chromeRowValues);
        chromeRowValues.forEach((chromeValue)=>{
          if(chromeValue.includes("%")){
            cy.log(chromeValue)
            cy.get('.bg-warning').should('have.text',`Chrome CPU: ${chromeValue}`)

          }
        })
      }
    });
  });
});