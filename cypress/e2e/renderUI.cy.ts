describe("render ui", () => {
  it("renders filters on the screen", () => {
    // cy.visit("https://tymex-interview-frontend-locpham-webapp.vercel.app/");
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="search-filter"]').should("exist");
    cy.get('[data-testid="price-range-filter"]').should("exist");
    cy.get('[data-testid="tier-filter"]').should("exist");
    cy.get('[data-testid="theme-filter"]').should("exist");
    cy.get('[data-testid="time-sort-filter"]').should("exist");
    cy.get('[data-testid="price-sort-filter"]').should("exist");
    cy.get('[data-testid="reset-filter"]').should("exist");
  });

  it("renders list of products", () => {
    // cy.visit("https://tymex-interview-frontend-locpham-webapp.vercel.app/");
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=single-product]").should("exist");
  });
});
