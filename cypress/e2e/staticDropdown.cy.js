describe("Static Dropdown Functionality", () => {
    it("Static Dropdown Functionality", () => {
      cy.visit("https://automationexercise.com/");
      cy.get(".shop-menu .nav li:nth-child(4) a").click();
      cy.get('[data-qa="signup-name"]').type("nagendra");
      cy.get('[data-qa="signup-email"]').type("nagendra801910@gmail.com");
      cy.get('[data-qa="signup-button"]').click();
      cy.get("#id_gender1").check("Mr");
      cy.get('[data-qa="password"]').type("Test@123");
      cy.get('[data-qa="days"]').select(4);
      cy.get('[data-qa="months"]').select(11);
      cy.get('[data-qa="years"]').select("2000");
      cy.get('[id="newsletter"]').check();
      cy.get('[id="optin"]').check();
  
      // End test case here
      cy.log("Test Case Passed!");
    });
  });