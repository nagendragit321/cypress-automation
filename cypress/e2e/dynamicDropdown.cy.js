describe('Dynamic Dropdown Functionality', () => {
    it('Dynamic Dropdown', () => {
      cy.visit('https://www.united.com/en/us/', {headers: {"Accept-Encoding": "gzip,deflate"}})
      cy.get('#bookFlightOriginInput').click().clear().type('CLT');
      cy.get( '#bookFlightOriginInput').each(($el) => {
        cy.log($el.text());
        if ($el.text().includes('CLT')) {  
            cy.wrap($el).click();    
        }           
    });  
    })           
  })