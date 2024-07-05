import { loginSucess } from "../support/commom/index";
import { urlHMG, dataLogin } from "../fixtures/dataUtils";
import 'cypress-file-upload';

/// <reference types="Cypress" />

describe('Acessando Chat', function () {
  beforeEach(function () {
    cy.visit(urlHMG);
    loginSucess(dataLogin.emailLogin, dataLogin.passwordLogin)
    cy.contains('a.level_1', 'Chats').should('be.visible').click();
    cy.get('input.list__form__item[placeholder="Número Whatsapp:"]').type('12988060175');
    cy.get('.user-name-wrapper .user-name').contains('Gustavo Henrique').click();
    cy.get('#chat_messages_app').should('be.visible');

  })

  it('Enviando arquivo com mais de 15MB', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.get('.icon-chat.only_desktop').should('be.visible');
    cy.get('.icon-chat.only_desktop').click();
    cy.get('.dz-button').click();

    cy.fixture('20mb.wmv', 'base64').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: Cypress.Buffer.from(fileContent, 'base64'),
        fileName: '20mb.wmv',
        mimeType: 'video/x-ms-wmv'
      });
      cy.get('[data-dz-errormessage]').trigger('mouseover', { force: true });
      cy.get('[data-dz-errormessage]').should('have.text', 'O arquivo é muito grande. Tamanho máximo permitido: 15MB.');

    })
  })

});




