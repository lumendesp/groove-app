Feature: Available on

Scenario: Verificar disponibilidade da música no Youtube a partir do em alta
  Given o usuário está na página "in-high"
  When o usuário clica na imagem "https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png"
  Then o usuário deve clicar no link "https://www.youtube.com/watch?v=ZmDBbnmKpqQ&ab_channel=OliviaRodrigoVEVO"