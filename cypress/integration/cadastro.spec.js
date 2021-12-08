/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Realziar o cadastro de novo usuário', () => {
    it('Quando eu preencher todos os dados obrigatórios, então devo ser cadastrado no sistema.', () => {
        //Realizando o acesso ao site
        cy.visit('/', { timeout: 30000 })
            .title()
            .should('eq', 'My Store')
            
        //Clicando no botão de Sign In
        cy.get('a.login').click()

        //Realizando o cadastro
        cy.get('input#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()
        
        //cy.get('.page-heading').contains('CREATE AN ACCOUNT') - ADICIONAR ASSERÇÃO PARA ESTE CAMPO.

        cy.get('input#id_gender2').click()

        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())

        cy.get('input#passwd').type('Teste@123')
        cy.get('select#days').select('18', { force: true })
        cy.get('select#months').select(chance.month(), { force: true })
        cy.get('select#years').select(chance.year({ min: 1900, max: 2021 }), { force: true })

        cy.get('input#company').type('Agilizei Bootcamp')
        cy.get('input#address1').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('California', { force: true })
        cy.get('input#postcode').type(chance.zip())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').clear()
            .type('Home')
        
        //Concluir cadastro
        cy.get('button#submitAccount').click()

        cy.title()
        .should('contain', 'My account')

        cy.log('Você realizou o cadastro com sucesso!')
    });
});
