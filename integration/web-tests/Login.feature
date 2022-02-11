@test
Feature: Eventos de Infração

  Como usuário do sistema Quantic,
  desejo acessar o sistema com minhas credenciais.

  Scenario: Realizar login Quantic
    Given que acesso o sistema Quantic
    When informo o login "qa.rocketquality@gmail.com"
    And informo a senha "losada50K"
    And clico no botão "Sign in"
    Then acesso a página home do sistema