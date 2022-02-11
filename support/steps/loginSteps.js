import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../pageobjects/basePage";
import LoginPage from '../pageobjects/loginPage'

const loginPage = new LoginPage
const base = new BasePage

Given('que acesso o sistema Quantic', () => {
    loginPage.acessarSistema();
})

Given('acesso a tela de {string}', url => {
    loginPage.acessarUrl(url);
})

When('informo o login {string}', login => {
    loginPage.informarLogin(login);
})

When('informo a senha {string}', senha => {
    loginPage.informarSenha(senha);
})

When('clico no botão entrar', () => {
    loginPage.clicarBotaoEntrar();
})

Then('acesso a página home do sistema', () => {
    loginPage.acessarPaginaInicial();
})

And('vejo uma mensagem', () => {

})

