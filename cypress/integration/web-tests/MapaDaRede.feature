@test
Feature: Onde usar meu cartão VR

  Como usuário visitante do sistema,
  desejo visualizar a rede credenciada do catão VR

  Scenario: Visualizar no mapa onde usar meu cartão VR
    Given que acesso o site
    And clico no link "Pra Você"
    When clico no link "Onde usar meu cartão VR?"
    Then o botão de rede credenciada deve estar presente