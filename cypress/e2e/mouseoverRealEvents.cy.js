describe('Mouseover Real Event Functionality', () => {
    it('Mouseover Real Event For All Products', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu .nav li:nth-child(4) a').click();
      cy.get('[data-qa="login-email"]').type('nagendra8019@gmail.com');
      cy.get('[data-qa="login-password"]').type('Test@123');
      cy.get('[data-qa="login-button"]').click();
      cy.get('#slider-carousel > .right > .fa').click().wait(1000).click().wait(1000).click().wait(1000);
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo').realHover().wait(1000);
     //   cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').realHover().wait(1000);
    //   cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo').realHover().wait(1000);
      cy.get('.product-image-wrapper > .single-products > .productinfo')
      .each(($el) => {
      cy.wrap($el).realHover().wait(1000);
        });
        cy.scrollTo('top', { duration: 3000 }); 
        cy.wait(1000); 
        cy.scrollTo('bottom', { duration: 3000 }); 
        cy.get(':nth-child(36) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').click();
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
        // cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('#name').type('sommeone');
        cy.get('#email').type('someone@yahoo.com');
        cy.get('#review').type('Good quality');
        cy.get('#button-review').click();
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click().wait(1000).click();
    })
  })