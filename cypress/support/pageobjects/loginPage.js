import LoginElements from '../elements/loginPageElements'
import ServicePage from './servicesPage';

const service = new ServicePage;
class LoginPage extends LoginElements {

    acessarSistema() {
        cy.visit('/').screenshot('acessou a url');
    }
    
    acessarUrl(uri) {
       cy.visit(uri);
    }

    informarLogin(login) {
        this.typeOnElement(this.email(), login);
    }
    
    informarSenha(senha) {
        this.typeOnElement(this.senha(), senha);
    }
    
    clicarBotaoEntrar(button) {
        this.clickOnButton(button);
    }

    acessarPaginaInicial() {
        cy.get(this.telaInicial())
        .should('is.visible');
        this.screenshotStep();
    }
   
}

export default LoginPage;
