describe("Home", () => {
  it("ensure that useState example exists", () => {
    cy.visit("/");
    cy.findByText(/useState/i)
      .should("exist")
      .click();
  });

  it("ensure that switch component is working", () => {
    cy.visit("/");
    cy.findByTestId("background").should("have.class", "bg-blue-400");
    cy.findByTestId("switch")
      .should("exist")
      .click();
    cy.findByTestId("background").should("have.class", "bg-green-400");
  });

  it("mock the request", () => {
    cy.request({
      url: "https://paulrrdiaz-covid19.herokuapp.com/api/countries",
      method: "GET",
      status: 200,
    }).then(countries => {
      cy.findByText(/useState/i).invoke("text", JSON.stringify(countries, null, 2));
    });
  });
});
