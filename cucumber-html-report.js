const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json',
  reportPath: './report/',
  staticFilePath: true,
  displayDuration: true,
  pageTitle: 'Relatório Resultados de Automação de Testes',
  reportName: 'Relatório Resultados de Automação de Testes',
  pageFooter: '<div class="created-by">Powered by <p>Cristiano Gonzaga</p></div>',
  metadata:{
      browser: {
          name: 'Chrome',
          version: '60'
      },
      device: 'Local test machine',
      platform: {
          name: 'windows',
          version: '10'
      }
  },
  customData: {
      title: 'Run info',
      data: [
          {label: 'Project', value: 'Cristiano Gonzaga - cypress-vr'}
      ]
  }
});