import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Vendo musicas em alta
//Given: common-step-definitions.ts

When("o usuário clica na imagem {string}", (button: string) => {
  cy.getDataCy(button).click();
});

Then("o usuário deve clicar no link {string}", (youtubeLink: string) => {
  cy.getDataCy(youtubeLink).should("have.attr", "href", youtubeLink);
});