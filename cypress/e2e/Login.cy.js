import { urlHMG } from "../fixtures/dataUtils";

/// <reference types="Cypress" />

describe('Acessando o Login', function () {
  beforeEach(function () {
    cy.visit(urlHMG);
  })

  it('Verifica o título da aplicação', function () {
    cy.title().should('be.equal', 'ChatGuru | Login')
  })

  it('Preenchendo Email e Senha correta', function () {
    cy.get('#email').type('gholiveirac89@gmail.com');
    cy.get('#password').type('2w@eYQy4r2y');
    cy.get('button[type="submit"]').click()
    cy.title().should('be.equal', 'ChatGuru | Painel de Controle')
  })

  it('Preenchendo Email correto e Senha incorreta', function () {
    cy.get('#email').type('gholiveirac89@gmail.com');
    cy.get('#password').type('a1b2c3d4e5');
    cy.get('button[type="submit"]').click()
    cy.get('.noty_body').should('contain.text', 'Email ou Senha Inválido(s)');
    // Verificar se o IP está bloqueado ou mensagem alterada.
  })

  it('Preenchendo Email incorreto e Senha incorreta', function () {
    cy.get('#email').type('a1b2c3d4e5@gmail.com');
    cy.get('#password').type('2w@eYQy4r2y');
    cy.get('.noty_body').should('contain.text', 'Email ou Senha Inválido(s)');
    // Verificar se o IP está bloqueado ou mensagem alterada.
  })

  it('Validando Esqueci Senha', function () {
    cy.get('.ForgotPassword').click();
    cy.title().should('be.equal', 'ChatGuru | Recuperar Senha')
    cy.get('#email').should('be.visible');
    cy.contains('Recuperar Senha').should('be.visible');


  })

})