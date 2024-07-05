import { loginSucess } from "../support/commom/index";
import { urlHMG, dataLogin } from "../fixtures/dataUtils";
/// <reference types="Cypress" />

describe('Buscando Chat', function () {
  beforeEach(function () {
    cy.visit(urlHMG);
    loginSucess(dataLogin.emailLogin, dataLogin.passwordLogin)
    cy.contains('a.level_1', 'Chats').should('be.visible').click();
  })

  it('Informando Numero Correto', function () {
    cy.get('input.list__form__item[placeholder="Número Whatsapp:"]').type('12988060175');
    cy.get('.user-name-wrapper .user-name').contains('Gustavo Henrique').click();
    cy.get('#chat_messages_app').should('be.visible');
  })


  it('Informando Numero Incorreto', function () {
    cy.get('input.list__form__item[placeholder="Número Whatsapp:"]').type('12988060176');
    cy.contains('Nenhum chat foi encontrado.');
    cy.contains('Dica: Verifique se o chat encontra-se arquivado clicando em "Arquivados".')
  })




})