describe('Registration Functionality Error', () => {
    it('Re-Registration User with Same Email - Error Validation', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('.shop-menu .nav li:nth-child(4) a').click();
        cy.get('[data-qa="signup-name"]').type('nagendra');
        cy.get('[data-qa="signup-email"]').type('nagendra8019@gmail.com');
        cy.get('[data-qa="signup-button"]').click();

        // Check if "Email Address already exist!" message appears
        cy.get('body').then(($body) => {
            if ($body.find('.signup-form > form > p:contains("Email Address already exist!")').length > 0) {
                cy.log('Email already exists! Stopping test execution.');
                return; 
            } else {
                // Continue only if email does not exist
                cy.get('#id_gender1').should('be.visible').check();
            }
        });
    });
});