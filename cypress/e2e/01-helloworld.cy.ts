describe("empty spec", () => {
  it("passes", () => {
    cy.log("hello world!");
  });
  it("Typescript Introduction", () => {
    cy.log("hello world!");
    let stringVariable: string = "9";
    let numberVariable: number = 9;
    let booleanVariable: boolean = true;
    let anyVariable: any = "string";

    function addTwoNumbers(a: number, b: number): number {
      return a + b;
    }

    interface User {
      username: string;
      password: string;
    }
    function returningUserInformation(user: User): void {
      console.log("This is the user name" + user.username);
      console.log("This is the user password" + user.password);
    }
  });
});
