import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require("cy-verify-downloads");

//  Excel requirements
const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require("path");

// MySQL requirements
const mysql = require("mysql");

// Faker library
const { faker } = require("@faker-js/faker");

export default defineConfig({
  projectId: "5wg4vm",

  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // For verifying downloads package
      on("task", verifyDownloadTasks);

      // For excel implementation
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });

      // MySQL task
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });

      // Faker
      on("task", {
        freshUser() {
          return {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            registeredAt: faker.date.past(),
            vehicle: faker.vehicle.vehicle(),
          };
        },
      });

      // For the mocha-awesome-reporter
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    env: {
      demoVar: "Hello from the cypress.config.ts ",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      Angular: "https://globalsqa.com",
      db: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "cypress_test",
      },
      //   Mobile validation
      mobileViewportWidthBreakpoint: 400,
    },
  },

  pageLoadTimeout: 60000,

  // defaultCommandTimeout: 16000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  retries: {
    runMode: 2,
    openMode: 1,
  },

  video: false,

  // experimentalSessionAndOrigin: true;
  screenshotOnRunFailure: true,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(result);
      }
    });
  });
}
