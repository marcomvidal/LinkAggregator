# Link Aggregator
Quadro de links dispostos em cartão com possibilidades de personalização de informações e cores.

## Ferramentas utilizadas
- Totalmente front-end
- ECMAScript 6+, sem frameworks e altamente orientado a objetos
- HTML5 e CSS3 com Flexbox
- Gulp 4.0
- Babel 7.4

## Otimização de assets
Foram utilizados Gulp e Babel para racionalizar o uso de assets. Todos os arquivos JavaScript e CSS são minificados e aglutinados em apenas dois (`dist/script.js` e `dist/style.css`), reduzindo o tamanho total do download e a quantidade de requisições HTTP necessárias. O resultado é um carregamento mais rápido.<br>
Dado que os assets originais foram mantidos em `/src`, sua manutenção é facilitada já que é possível dividí-los em diversos arquivos e usar os recursos mais recentes do JavaScript, bastando rodar o Gulp ao final.

## Alteração dos links
É possível alterar os links exibidos diretamente de duas formas:
- Editando diretamente `dist/data.js`, ou
- Editando `src/data.js` e depois transpilando com Gulp
