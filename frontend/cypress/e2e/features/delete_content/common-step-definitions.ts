import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário está na página {string}", (page: string) => {
  cy.visit(page);
});

When("o usuário clica na aba {string}", (tab: string) => {
  cy.getDataCy(tab).click();
});

When("o usuário clica em {string}", (button: string) => {
  // cy.getDataCy(`delete_${id}`).click();
  cy.getDataCy(button).click();
});

When('o usuário clica em "deletar" para confirmar a remoção', () => {
  cy.contains('button', 'Sim, deletar!').click()
});

Then('o modal é fechado e o usuário clica em "ok" na mensagem de sucesso', () => {
  cy.contains('button', 'OK').click()
});