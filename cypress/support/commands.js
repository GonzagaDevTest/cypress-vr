import 'cypress-wait-until';

Cypress.Screenshot.defaults({
    capture: 'runner'
  })

    // Intercepta as requisicoes e inclui o retorno no log
Cypress.Commands.add('interceptRequest', (uri, alias) => {
  cy.intercept(uri).as(alias);
  
  cy.wait(`@${alias}`, { timeout: 30000 }).then((interception) => {
      let status = interception.response.statusCode;
      let method = interception.request.method.toString();
      let url = interception.request.url;
  
      Integrador.servicos.push(
      {
          "method": method,
          "status" : status,
          "url" : url
      }
      );
  
      let log = 'Request [ ' + method + ' ' + url + ' ]\n'
      + 'Retornou status [ ' + status + ' ]';
  
      cy.log(log)
  })
})
