import HTML = Mocha.reporters.HTML;

let img: HTMLImageElement;
describe("Broken images with Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/broken`);
  });

  it("Not broken image assertion", () => {
    cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]')
      // .should("be.visible")
      .then(($img) => {
        img = $img[0] as unknown as HTMLImageElement;

        cy.log("this is the image yielded", $img);
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
  });

  it("Broken image assertion", () => {
    cy.get('[src="/images/Toolsqa_1.jpg"]')
      // .should("not.be.visible")
      .then(($img) => {
        img = $img[0] as unknown as HTMLImageElement;

        cy.log("this is the image yielded", $img);
        expect(img.naturalWidth).to.be.eq(0);
      });
  });
});
