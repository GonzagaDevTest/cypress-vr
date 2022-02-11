import BasePage from "../pageobjects/basePage"

class LoginElements extends BasePage {
    email = () => {return '[data-testid="SIGN_IN_USERNAME_INPUT"]'}
    senha = () => {return '[data-testid="SIGN_IN_PASSWORD_INPUT"]'}
    botaoLogin = () => { return '[data-testid="SIGN_IN_SUBMIT_BUTTON"]' }
    telaInicial = () => { return '[data-testid="header"]' }
}

export default LoginElements