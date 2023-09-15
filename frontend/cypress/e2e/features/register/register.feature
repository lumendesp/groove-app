Feature: Criar uma música e album
  As a usuário
  I want to criar uma música
  so that eu possa usar meu sistema

Scenario: Criar uma Musica
  Given o usuário está na página "edition"
  When o usuário clica em "music" 
  When o usuário clica em "add_musica"
  When o usuário preenche os campos: "Título" com "Really Want to Stay At Your House",  "Gênero" com "Rock", "Artista" com "MIURA JAM", "Ano de Lançamento" com "2023", "Link do YouTube" com "[Link específico do YouTube]", "Link do Spotify" com "[Link específico do Spotify]", "Link do Apple Music" com "[Link específico do Apple Music]", "Link do Deezer" com "[Link específico do Deezer]", "Link para Imagem da Música" com "[Link da imagem]"
  And o usuario clica em "submmit"
  Then o modal é fechado e o usuário visualiza a mensagem "Música 'Really Want to Stay At Your House' foi criada com sucesso"

Scenario: Criar um Álbum
  Given o usuário está na página "edition"
  When o usuário clica em "Album" 
  When o usuário clica em "add_album"
  When o usuário preenche os campos: "Título do Álbum" com "Cyberpunk 2077: Radio, Vol 2", "Artista" com "Various Artists", "Ano de Lançamento" com "2023", "Número de Faixas" com "10", "Link do Spotify" com "[Link específico do Spotify para o álbum]", "Link do Apple Music" com "[Link específico do Apple Music para o álbum]", "Link do Deezer" com "[Link específico do Deezer para o álbum]", "Link para Imagem do Álbum" com "[Link da imagem do álbum]"
  And o usuário clica em "submmit"
  Then o modal é fechado e o usuário visualiza a mensagem "Álbum 'Cyberpunk 2077: Radio, Vol 2' foi criado com sucesso"

Scenario: Criar uma Review
  Given o usuário está na página "edition"
  When o usuário clica em "review" 
  When o usuário clica em "add_review"
  When o usuário preenche os campos: "Título da Review" com "Álbum incrível", "Descrição" com "AMEI", "Avaliação" com "5", "Autor da Review" com "John Doe", "Música Relacionada" com "Cyberpunk 2077: Radio, Vol 2"
  When o usuário clica em "submmit"
  Then o modal é fechado e o usuário visualiza a mensagem "Review 'Álbum incrível' foi criada com sucesso"
