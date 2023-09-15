Feature: Deletar uma Música
  As a usuário
  I want to deletar uma música
  so that eu possa atualizar meu sistema

Scenario: Deletar uma música
Given o usuário está na página "edition" 
When o usuário clica na aba "music"
When o usuário clica em "delete_65031acfc19fc13d7b108cb4"
When o usuário clica em "deletar" para confirmar a remoção 
Then o modal é fechado e o usuário clica em "ok" na mensagem de sucesso