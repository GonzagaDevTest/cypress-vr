@test
Feature: Onde usar meu cartão VR

  Como usuário do sistema visitante,
  desejo acessar onde posso usar o cartão

  Scenario: Visualizar no mapa onde usar meu cartão VR
    Given que acesso o site
    And clico no link "Pra Você"
    When clico no link "Onde usar meu cartão VR?"
    Then o elemento "#rede-credenciada" deve estar presente