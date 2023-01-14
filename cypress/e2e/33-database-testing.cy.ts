describe("MySQL Database Testing", () => {
  it("creates a movie table", () => {
    cy.task(
      "queryDb",
      "CREATE TABLE movies(title VARCHAR(50)   NOT NULL,genre VARCHAR(30) NOT NULL,director VARCHAR(50) NOT NULL, release_year INTEGER NOT NULL)"
    );
  });

  it("Insert a movie", () => {
    cy.task(
      "queryDb",
      `INSERT INTO movies VALUES ("Joker", "psychological thriller", "Todd Phillips", 2019), ("Batman", "action", "Matt Reeves",  2022)`
    ).then((result: any) => {
      expect(result.affectedRows).to.equal(2);
    });
  });

  it("Select all movies", () => {
    cy.task("queryDb", `SELECT * FROM movies;`).then((result: any) => {
      cy.log("First row validation").then(() => {
        expect(result[0].director).to.equal("Todd Phillips");
        expect(result[0].genre).to.equal("psychological thriller");
        expect(result[0].release_year).to.equal(2019);
        expect(result[0].title).to.equal("Joker");
      });
      cy.log("Second row validation").then(() => {
        expect(result[1].director).to.equal("Matt Reeves");
        expect(result[1].genre).to.equal("action");
        expect(result[1].release_year).to.equal(2022);
        expect(result[1].title).to.equal("Batman");
      });
    });
  });

  it("Update a movie", () => {
    cy.task(
      "queryDb",
      `UPDATE movies SET genre = "test genre" WHERE title = "Joker"`
    ).then((result: any) => {
      expect(result.changedRows).to.equal(1);
    });
    cy.task(
      "queryDb",
      `SELECT genre, title FROM movies WHERE title="Joker"`
    ).then((result: any) => {
      expect(result[0].genre).to.equal("test genre");
    });
  });

  it("Delete the movie table", () => {
    cy.task("queryDb", `DROP TABLE IF EXISTS movies`);
  });
});
