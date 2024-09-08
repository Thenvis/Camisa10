# Camisa10 - Imersão Dev com Google Gemini

## Descrição
O Camisa10 é uma aplicação web simples que permite aos fãs de futebol pesquisarem pelos camisas 10 dos clubes do Brasil, feito em homenagem para a camisa mais importante do futebol. A aplicação busca por nomes de jogadores, títulos, descrições e tags relacionadas a cada jogador em um banco de dados pré-definido.

## Tecnologias Utilizadas
* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação, incluindo a pesquisa e a renderização dos resultados.

## Como funciona
1. **Interface do Usuário:** O usuário digita o nome do jogador ou uma palavra-chave relacionada em um campo de pesquisa.
2. **Busca:** A aplicação percorre o banco de dados (armazenado em `dados.js`) e procura por correspondências na propriedade `nome`, `titulo`, `descricao` ou `tags` de cada jogador.
3. **Resultados:** Os resultados da pesquisa são exibidos em uma lista, com informações como nome, imagem, título, descrição e um link para mais detalhes.

## Estrutura dos Dados
Os dados dos jogadores são armazenados em um arquivo JavaScript separado (`dados.js`). Cada jogador é representado por um objeto com as seguintes propriedades:
* `nome`: Nome completo do jogador
* `titulo`: Um apelido do jogador
* `descricao`: Uma descrição mais detalhada do jogador
* `imagem`: URL da imagem do jogador
* `link`: Link para mais informações sobre o jogador
* `tags`: Palavras-chave relacionadas ao jogador (e.g., posição, time, nacionalidade)

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor
Andrew Caracho
andrewcaracho@gmail.com

