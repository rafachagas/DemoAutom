/// <reference types="Cypress" />

// Importe o cypress-file-upload commands
import 'cypress-file-upload';

const {elementsBugerEats}= require ("../pageObjects/elements");

describe('Demo automation', function() {
    const entregador= {
        nome: "Michael Cohen",
        cpfValido: '04839594724',
        cpfInvalido: '562.804.720-19',
        mail: "michaelbuger@emailautom.com.br",
        whatsapp: '4899999-9999',
        cep: '02040-070',
        rua: 'Rua Barra de São João',
        numero: '32',
        complemento: 'apto12',
        bairro: 'Jardim São Paulo(Zona Norte)',
        uf: 'São Paulo/SP',
        foto: 'testeTempo',        
    }

    it('cadastro válido entregador', ()=>{
        cy.visit('/')
        cy.contains("Cadastre-se para fazer entregas").should('be.visible').click()
        cy.get(elementsBugerEats.nome).type(entregador.nome)
        cy.get(elementsBugerEats.cpf).type(entregador.cpfValido)
        cy.get(elementsBugerEats.email).type(entregador.mail)
        cy.get(elementsBugerEats.whatsapp).type(entregador.whatsapp)
        cy.get(elementsBugerEats.cep).type(entregador.cep)
        cy.get(elementsBugerEats.buscarCEP).click()
        cy.get(elementsBugerEats.numero).type(entregador.numero)
        cy.get(elementsBugerEats.complemento).type(entregador.complemento)
        cy.get(elementsBugerEats.rua).should('have.value', entregador.rua)
        cy.get(elementsBugerEats.bairro).should('have.value', entregador.bairro)
        cy.get(elementsBugerEats.moto).click()
        //cy.get(elementsBugerEats.fotoCnh).click()

        cy.get('.dropzone').click();

        // Verificar se a janela de seleção de arquivo foi aberta
        cy.window().then((win) => {
          cy.document().then((doc) => {
            const fileInput = doc.querySelector('.dropzone input[type="file"]');
            cy.stub(win, 'open').as('windowOpen');
            cy.wrap(fileInput).trigger('click', { force: true });
        
            // Aguardar por um pequeno intervalo para dar tempo da janela ser aberta
            cy.wait(1000);
        
            // Verificar se a função 'open' do objeto window foi chamada
            cy.window().its('open').should('have.been.called');
          });
        });

})


    it('cadastro inválido entregador', ()=>{
        cy.visit('/')
        cy.contains("Cadastre-se para fazer entregas").should('be.visible').click()
        cy.get(elementsBugerEats.nome).type(entregador.nome)
        cy.get(elementsBugerEats.cpf).type(entregador.cpfInvalido)
        cy.get(elementsBugerEats.email).type(entregador.mail)
        cy.get(elementsBugerEats.whatsapp).type(entregador.whatsapp)
        cy.get(elementsBugerEats.cep).type(entregador.cep)
        cy.get(elementsBugerEats.buscarCEP).click()
        cy.get(elementsBugerEats.numero).type(entregador.numero)
        cy.get(elementsBugerEats.complemento).type(entregador.complemento)
        cy.get(elementsBugerEats.rua).should('have.value', entregador.rua)
        cy.get(elementsBugerEats.bairro).should('have.value', entregador.bairro)
        cy.get(elementsBugerEats.moto).click()
        cy.get(elementsBugerEats.btnCadastre).click()
        cy.get('span[class="alert-error"]').contains('Oops! CPF inválido')
    })
})

