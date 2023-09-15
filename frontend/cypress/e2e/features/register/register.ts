import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Criar uma Musica
//Given: common-step-definitions.ts



When('o usuário preenche os campos: "Título" com "Really Want to Stay At Your House",  "Gênero" com "Rock", "Artista" com "MIURA JAM", "Ano de Lançamento" com "2023", "Link do YouTube" com "[Link específico do YouTube]", "Link do Spotify" com "[Link específico do Spotify]", "Link do Apple Music" com "[Link específico do Apple Music]", "Link do Deezer" com "[Link específico do Deezer]", "Link para Imagem da Música" com "[Link da imagem]"', () => {
  const fields = {
      "title": "Really Want to Stay At Your House",
      "genre": "Rock",
      "artist": "MIURA JAM",
      "release_year": "2023",
      "yt": "[Link específico do YouTube]",
      "sp": "[Link específico do Spotify]",
      "amp": "[Link específico do Apple Music]",
      "ld": "[Link específico do Deezer]",
      "img": "[Link da imagem]"
  };

  for (const [field, value] of Object.entries(fields)) {
      cy.getDataCy(field).type(value);
  }
});



// Scenario: Criar um Álbum
//Given: common-step-definitions.ts

When('o usuário preenche os campos: "Título do Álbum" com "Cyberpunk 2077: Radio, Vol 2", "Artista" com "Various Artists", "Ano de Lançamento" com "2023", "Número de Faixas" com "10", "Link do Spotify" com "[Link específico do Spotify para o álbum]", "Link do Apple Music" com "[Link específico do Apple Music para o álbum]", "Link do Deezer" com "[Link específico do Deezer para o álbum]", "Link para Imagem do Álbum" com "[Link da imagem do álbum]"', () => {
    const fields = {
        "title": "Cyberpunk 2077: Radio, Vol 2",
        "artist": "Various Artists",
        "release_year": "2023",
        "genre": "Rock",
        "yt": "[Link específico do YouTube para o álbum]",
        "sp": "[Link específico do Spotify para o álbum]",
        "amp": "[Link específico do Apple Music para o álbum]",
        "ld": "[Link específico do Deezer para o álbum]",
        "img": "[Link da imagem do álbum]"
    };

    for (const [field, value] of Object.entries(fields)) {
        cy.getDataCy(field).type(value);
    }
});



// Scenario: Criar uma Review
//Given: common-step-definitions.ts

When('o usuário preenche os campos: "Título da Review" com "Álbum incrível", "Descrição" com "AMEI", "Avaliação" com "5", "Autor da Review" com "John Doe", "Música Relacionada" com "Cyberpunk 2077: Radio, Vol 2"', () => {
  const fields = {
      "title": "Álbum incrível",
      "description": "AMEI",
      "rating": "5",
      "author": "John Doe",
      "song": "65030855acec9f7513d8c664"
  };

  for (const [field, value] of Object.entries(fields)) {
      cy.getDataCy(field).type(value);
  }
});
