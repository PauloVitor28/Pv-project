
        describe('fazer cadastro e login', () => {
    it('criar um cadastro no site e fazer um login com o mesmo', () => {
        cy.intercept('/config').as('getConfig')
        cy.intercept('/config', (req) => {
          delete req.headers['if-none-match']
        }).as('getConfig')

        cy.visit ("https://www.op.gg");
        cy.get('.css-6c6v7u') .click ();
        cy.get('.login__sign-up-link > .member-link') .click ();
        cy.get('.member-numberformat-input__state') .click() .type ("2005/11/28");
        cy.get('.age__l-btn > .member-button') .click();
        cy.get('.agree__l-check-all') .click ();
        cy.get('.agree__btn') .click();
        cy.get(':nth-child(3) > .member-input__state > .member-input__label').click ({force: true}) 
        cy.get(':nth-child(3) > .member-input__state > .member-input__label') .type ("mouracalil@gmail.com")
        cy.get(':nth-child(4) > .member-input__state') .click ({foce: true}) 
        cy.get(':nth-child(4) > .member-input__state') .type ("pvcalil")
        cy.get(':nth-child(6) > .member-input__state') .click ({force: true})
        cy.get(':nth-child(6) > .member-input__state') .type ("Scarface00")
        cy.get('.sign-up__go-to-login-btn') .click()
        cy.get(':nth-child(6) > .member-input__state') .click({force: true})
        cy.get(':nth-child(6) > .member-input__state') .type("mouracalil@gmail.com")
        cy.get(':nth-child(7) > .member-input__state') .click({force: true})
        cy.get(':nth-child(7) > .member-input__state') .type("Scarface00")
        cy.get('.login__btn') .click()

        });
});

    
