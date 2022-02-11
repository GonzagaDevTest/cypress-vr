import { Then, When } from "cypress-cucumber-preprocessor/steps";
import Joi from "joi";
import { naoAutorizadoResponse } from '../json-schemas/erro';
import { loginResponse } from '../json-schemas/login';

let response = undefined;
const url = 'https://teste.com.br';
const md5 = require('md5');

When('eu realizo uma requisição POST para o endpoint {string}', (path, table) => {
    cy.request({
        method: 'POST',
        url: `${url}${path}`,
        headers: {
            'Content-type': 'application/json'
        },
        failOnStatusCode: false,
        body: {
            username: table.rowsHash().usuario,
            password: md5(table.rowsHash().senha),
            client_id: 'app',
            grant_type: 'password',
            client_secret: 'secret'
        }
    }).then((res) => {
        response = res;
    })
})

Then('recebo o status {int}', status => {
    expect(response.status).to.eq(status);
})

Then('verifico se o response json schema é o de login do usuário', () => {
    Joi.assert(response.body, loginResponse)
})

Then('verifico se o response json schema é o de não autorizado', () => {
    Joi.assert(response.body, naoAutorizadoResponse)
})