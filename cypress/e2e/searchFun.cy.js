
describe('Launch The Application', () => {
    it('Launch the Automation application and perform login and logout', () => {
      // Step 1: Launch the browser and visit the application
      cy.visit('https://automationexercise.com/');
  
      // Step 2: Click on 'Signup / Login' button (Navigate to Login page)
      cy.get('.shop-menu .nav li:nth-child(4) a').click();
  
      // Step 3: Verify 'Login to your account' is visible
      cy.get('h2').contains('Login to your account').should('be.visible');
  
      // Step 4: Enter correct email address and password
      cy.get('[data-qa="login-email"]').type('nagendra8019@gmail.com');
      cy.get('[data-qa="login-password"]').type('Test@123');
  
      // Step 5: Click 'Login' button
      cy.get('[data-qa="login-button"]').click();
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
      
      // Step 6: Verify 'product landing page' is visible
      cy.url().should('eq', 'https://automationexercise.com/products');

      cy.get('#search_product').type('Tshirt').should('have.value', 'Tshirt');

      cy.get('#submit_search > .fa').click();

      cy.url().should('eq', 'https://automationexercise.com/products?search=Tshirt');

      cy.get('#search_product').clear().type('Top');
      
      cy.get('#submit_search > .fa').click();

      cy.url().should('eq', 'https://automationexercise.com/products?search=Top');
      
      cy.get("#search_product")
        .type("Tshirt")
        // .should("have.value", "Tshirt")
        .clear()

        .type("Top")
        // .should("have.value", "Top")
        .clear()

        .type("Dress")
        .should("have.value", "Dress"); 

        cy.get('#submit_search > .fa').click();

        cy.url().should('eq', 'https://automationexercise.com/products?search=Dress');

    });
  });
  