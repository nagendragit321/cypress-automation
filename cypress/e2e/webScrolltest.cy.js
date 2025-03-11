describe('Scroll The Application', () => {
    it('Scroll Into The View Automation application', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu .nav li:nth-child(4) a').click();
      cy.get('[data-qa="login-email"]').type('nagendra8019@gmail.com');
      cy.get('[data-qa="login-password"]').type('Test@123');
      cy.get('[data-qa="login-button"]').click();
      cy.scrollTo('bottom');
      cy.wait(2000);
      cy.scrollTo('top');
      cy.get('#slider-carousel > .right > .fa').click().wait(1000).click().wait(1000).click().wait(1000);
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    })
  })