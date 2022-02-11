import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../pageobjects/basePage";

const basePage = new BasePage

And('clico no botão {string}', botao => {
    basePage.clickOnButton(botao);
})

And('clico no link {string}', text => {
    basePage.clickOnLink(text);
})

And('aguardo {int} segundos', time => {
    basePage.wait((time)*1000);
})

And('o elemento {string} deve estar presente', el => {
    cy.get(el).screenshot("Elemento esta presente")
})

Given('que acesso o site', () => {
    cy.viewport(1400, 800)
    cy.visit('/').screenshot('acessou a url');
})
