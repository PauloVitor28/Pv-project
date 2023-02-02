describe('marcar uma revisao na concesionaria mais proxima', () => {
  it('Entrar no site da Volkswagen e marcar uma revisao na concesionaria mais proxima', () => {
    cy.visit('https://www.altavw.com.br/nivus/detalhe-do-carro?id=5ed159b240fc94175f8b4567&content_type=catalogs&gclid=Cj0KCQiA_P6dBhD1ARIsAAGI7HApdhS_i8MDQIc4fnXPwUw5gyhFPOZokuijIy9t8zFGirrsX7DUYacaAoqOEALw_wcB')
    cy.get(':nth-child(7) > .featured')
      .click();
    cy.get('<div class="col-md-12 col-sm-12 col-xs-12 form-group box-form-dealer">');
    cy.get ('select') .select('Selecione uma loja')
      .select('Alta Braz Leme');
    cy.get(':nth-child(4) > .form-control')
      .type('Paulo Vitor');
    cy.get(':nth-child(5) > .form-control')
      .type('mouracalil@gmail.com');
    cy.get(':nth-child(6) > .form-control')
      .type(11971375925);
    cy.get(':nth-child(7) > .form-control')
      .type('O carro eh TOP');
    cy.get('#text-area')
      .type('fiquei mais de hora preso na porra do cy select ');
     
    cy.get('input.form-control.datetimepicker')
      .click({ multiple: true });
    cy.get(':nth-child(11) > .form-control')
      .click();
    cy.get('div.g-recaptcha.recaptcha')
      .click();
    cy.get('#lgpd-check')
      .check();
    cy.get('#default-form-submit')
      .click();
  })

  
})