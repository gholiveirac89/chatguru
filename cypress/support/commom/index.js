/// <reference types ="cypress"/>

export function loginSucess(emailUser, passwordUser) {
    cy.get('#email').type(emailUser)
    cy.get('#password').type(passwordUser), { log: false }
    cy.get('button[type="submit"]').click();
    cy.title().should('be.equal', 'ChatGuru | Painel de Controle');

}