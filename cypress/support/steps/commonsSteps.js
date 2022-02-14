import { Given, And} from "cypress-cucumber-preprocessor/steps";



And('clico no link {string}', text => {
    cy.get('a').contains(text).screenshot(`Clicou no botão ${text}`);
    cy.get('a').contains(text).click();
})

And('aguarda a resposta da api {string} apelidada como {string}', (api, alias) => {
    cy.interceptRequest(api, alias)
})

And('o elemento {string} deve estar presente', el => {
    cy.get(el).screenshot("Elemento esta presente")
})

Given('que acesso o site', () => {
    cy.viewport(1400, 800)
    cy.visit('/').screenshot('acessou a url');
})
