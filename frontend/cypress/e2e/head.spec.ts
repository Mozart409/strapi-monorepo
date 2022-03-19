// head.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/") // change URL to match your dev URL
    cy.get("button").should("contain", "Alles akzeptieren").click()
    cy.get("[data-testid='uc-accept-all-button']").click()
  })
})
