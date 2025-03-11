describe('Form Validation', () => {
    it('should fail if any of the fields (name, email, or review) are empty', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu .nav li:nth-child(4) a').click();
        cy.get('[data-qa="login-email"]').type('nagendra8019@gmail.com');
        cy.get('[data-qa="login-password"]').type('Test@123');
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
  
        cy.get('#name').type('someone');
        cy.get('#email').type('someone@yahoo.com');
        cy.get('#review').type('This is review');


        cy.get('#name, #email, #review').each(($el) => {
            cy.wrap($el).invoke('val').then((value) => {
              if (!value) {
                cy.log(`${$el.attr('id')} field is empty`);
              }
            });
          });
          
          // Click the button
          cy.get('#button-review').click();


          cy.get('.shop-menu > .nav > :nth-child(1) > a').click();

          cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    
    });
  });
  