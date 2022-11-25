Cypress.Commands.add("loadHome", () => {
  cy.intercept(
    "GET",
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nsUlzDJpStL8BIifzQPAK0B8SGZP9gO3",
    { statusCode: 200, fixture: "stub.json" }
  ).visit("http://localhost:3000");
});

Cypress.Commands.add("loadDetails", () => {
  cy.intercept(
    "GET",
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nsUlzDJpStL8BIifzQPAK0B8SGZP9gO3",
    { statusCode: 200, fixture: "stub.json" }
  )
    .visit("http://localhost:3000")
    .get(".card")
    .eq(0)
    .click();
});
