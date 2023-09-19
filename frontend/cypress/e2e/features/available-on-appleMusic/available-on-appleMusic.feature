Feature: Available on

Scenario: Verificar disponibilidade da música na Apple Music a partir do em alta
  Given o usuário está na página "in-high"
  When o usuário clica na imagem "https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png"
  Then o usuário deve clicar no link "https://music.apple.com/br/album/drivers-license/1667987392?i=1667987529"