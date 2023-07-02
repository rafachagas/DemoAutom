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
        cy.get(elementsBugerEats.fotoCnh).click()

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

