import 'cypress-file-upload';
import { loginSucess } from "../support/commom/index";
import { urlHMG, dataLogin } from "../fixtures/dataUtils";

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


  it('Enviando arquivo tipo Docx', function () {
    cy.get('.icon-chat.only_desktop').should('be.visible');
    cy.get('.icon-chat.only_desktop').click();
    cy.get('.dz-button').click();
    cy.fixture('Anotacoes.docx').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: JSON.stringify(fileContent),
        fileName: 'Anotacoes.docx',
        mimeType: 'application/docx'
      });
      cy.get('#drop-send-btn').click();
      cy.wait(2000)
      cy.get('#chat_messages_wrapper').scrollIntoView({ duration: 1000 });


      cy.get('.msg-status-sent') // Selecione a classe específica que representa a última mensagem
        .last() // Pegue apenas o último elemento encontrado
        .within(() => {
          // Obtenha o texto do timestamp da mensagem
          const timestampText = Cypress.$('.msg-timestamp').text().trim();
          const messageTimestamp = new Date(`2024-07-05 ${timestampText}`).getTime(); // Converta o timestamp para milissegundos
        });

    })
  })

  it('Enviando arquivo tipo TXT', function () {
    cy.get('.icon-chat.only_desktop').should('be.visible');
    cy.get('.icon-chat.only_desktop').click();
    cy.get('.dz-button').click();
    cy.fixture('Arquivo.txt').then(fileContent => {
      cy.get('input[type="file"]').attachFile({
        fileContent: JSON.stringify(fileContent),
        fileName: 'Arquivo.txt',
        mimeType: 'application/txt'
      });
      cy.get('#drop-send-btn').click();
      cy.wait(2000)
      cy.get('#chat_messages_wrapper').scrollIntoView({ duration: 1000 });


      cy.get('.msg-status-sent') // Selecione a classe específica que representa a última mensagem
        .last() // Pegue apenas o último elemento encontrado
        .within(() => {
          // Obtenha o texto do timestamp da mensagem
          const timestampText = Cypress.$('.msg-timestamp').text().trim();
          const messageTimestamp = new Date(`2024-07-05 ${timestampText}`).getTime(); // Converta o timestamp para milissegundos
        });


    })
  })

});




