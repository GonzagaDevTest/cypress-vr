import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../pageobjects/basePage";

const basePage = new BasePage

When('clico no botão {string}', botao => {
    basePage.clickOnButton(botao);
})

When('aguardo {int} segundos', time => {
    basePage.wait((time)*1000);
})
