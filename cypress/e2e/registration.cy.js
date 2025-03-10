describe('Registration Functionality ', () => {
    it('Registratiionn New User', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu .nav li:nth-child(4) a').click();
      cy.get('[data-qa="signup-name"]').type('nagendra');
      cy.get('[data-qa="signup-email"]').type('nagendra8019@gmail.com');
      cy.get('[data-qa="signup-button"]').click()
      cy.get('#id_gender1').check('Mr')
      cy.get('[data-qa="password"]').type('Test@123')
      cy.get('[data-qa="days"]').select(4)
      cy.get('[data-qa="months"]').select(11)
      cy.get('[data-qa="years"]').select('2000')
      cy.get('[id="newsletter"]').check();
      cy.get('[id="optin"]').check();
      cy.get('[data-qa="first_name"]').type('nagendra')
      cy.get('[data-qa="last_name"]').type('CA')
      cy.get('[data-qa="company"]').type('XYZ Company')
      cy.get('[data-qa="address"]').type('123 Main street')
      cy.get('[data-qa="country"]').select('United States')
      cy.get('[data-qa="state"]').type('North Carolina')
      cy.get('[data-qa="city"]').type('Charlotte')
      cy.get('[data-qa="zipcode"]').type('23464')
      cy.get('[data-qa="mobile_number"]').type(9801236543)
      cy.get('[data-qa="create-account"]').click()
      cy.get('[data-qa="continue-button"]').click()
    })
  })