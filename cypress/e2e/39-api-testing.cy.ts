describe("Basic API test examples", () => {
  it("GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("response", response);
        expect(response.status).to.equal(200);
      }
    );

    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").as(
      "GetData"
    );
    cy.get("@GetData").should((response: any) => {
      expect(response).to.have.property("status");
      expect(response.status).to.eq(200);
    });
  });

  it("POST request", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "title #101",
      body: "oist #101",
      userId: 101,
    }).then((response) => {
      cy.log("POST request", response.body);
    });
  });

  it("PUT request", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "title #101 UPDATED",
      body: "oist #101 UPDATED",
      userId: 1,
    }).then((response) => {
      cy.log("PUT request", response.body);
    });
  });

  it("PUT request", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        cy.log("PUT request", response.status);
      }
    );
  });
});

describe("API Testing Demo Advances", () => {
  it("Creating a user(emulation)", function () {
    const userId: string = "7d01de84-9527-4855-a10c-043a637178b3";
    cy.wrap(userId).as("userId");
  });

  it("Get an authorization token from the API account", function () {
    cy.request("POST", `${Cypress.env("demoQA")}/Account/v1/GenerateToken`, {
      userName: "Test",
      password: "Test1234*",
    }).then((response) => {
      cy.log("RESPONSE", response);
      const token: string = response.body.token;
      cy.log("TOKEN: ", token);
      cy.wrap(token).as("token");
    });
  });

  it("Get the user information", function () {
    const userId: string = this.userId;
    const token: string = this.token;
    const authorization: string = `Bearer ${token}`;
    const options = {
      method: "GET",
      url: `${Cypress.env("demoQA")}/account/v1/User/${userId}`,
      headers: {
        authorization,
      },
    };
    cy.request(options).then((response) => {
      cy.log("response", response);
      cy.log("STATUS CODE VALIDATION").then(() => {
        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
      });

      cy.log("USERNAME").then(() => {
        expect(response.body.username).to.be.equal("test");
      });

      cy.log("BOOK TITLE").then(() => {
        expect(response.body.books[0].title).to.be.equal("Git Pocket Guide");
      });

      cy.log("SCHEMA").then(() => {
        expect(response.body.username).to.be.a("string");
      });
    });
  });
});
