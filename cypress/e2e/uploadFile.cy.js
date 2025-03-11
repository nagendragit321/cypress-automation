
describe('File Upload Functionality', () => {
    it('File Upload Functionality', () => {
      cy.visit('https://automationexercise.com/');
  
      cy.get('.shop-menu .nav li:nth-child(4) a').click();
  
      cy.get('h2').contains('Login to your account').should('be.visible');
  
      cy.get('[data-qa="login-email"]').type('nagendra8019@gmail.com');
      cy.get('[data-qa="login-password"]').type('Test@123');
  
      cy.get('[data-qa="login-button"]').click();

      cy.get(':nth-child(9) > a').click();
      cy.get('[data-qa="name"]').type('Test User');
      cy.get('[data-qa="email"]').type('testuser@gmail.com');
      cy.get('[data-qa="subject"]').type('Shiping details');
      cy.get('[data-qa="message"]').type('tracking order to know expected delivery');

       //Verify 'file upload' 
      cy.get(':nth-child(6) > .form-control').selectFile( '/Users/admin/Desktop/sample.png');
      cy.get('[data-qa="submit-button"]').click();
      cy.get('span').click();
  
      cy.url().should('eq', 'https://automationexercise.com/');
    });
  });
  