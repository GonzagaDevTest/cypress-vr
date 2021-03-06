// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import deepEqualInAnyOrder from 'deep-equal-in-any-order'
require('cypress-xpath')
require('@shelex/cypress-allure-plugin')
require('dateformat')
require('cypress-get-table')

chai.use(deepEqualInAnyOrder)


afterEach(() => {
    cy.task('log', window.testState !== undefined ? `Nome do cenário: ${window.testState.currentScenario.name}` : 'Operação inicial')
    cy.screenshot('Finalizou o teste');
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })