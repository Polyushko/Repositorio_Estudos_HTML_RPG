# Grimório do Aventureiro

- **Atividade:** Projeto da disciplina de JavaScript
- **Tema do website:** Guia interativo de Dungeons & Dragons 5ª edição (2014)
- **Nome do aluno:** preencha com seu nome antes de entregar.

## Como abrir

Abra `index.html` em um navegador atualizado. O projeto usa HTML, CSS e JavaScript puros; não precisa instalar dependências nem iniciar um servidor.

## Funcionalidades interativas

- Catálogo das 12 classes, com filtro por estilo, pesquisa e painel de detalhes.
- Consulta de nove raças, com características, tamanho, deslocamento e idiomas.
- Cadastro de personagem de nível 1: valida nome, classe, raça, atributos, perícias e equipamento; calcula valores da ficha e salva no navegador.
- Fichas salvas podem ser recuperadas ao reabrir a página ou excluídas pelo botão correspondente.
- Chat demonstrativo da taverna, com validação e mensagens exibidas na página. As mensagens não são enviadas a um servidor.
- Menu recolhível em telas pequenas, navegação por âncoras e convite externo para uma mesa no Roll20.

## Conteúdos de JavaScript aplicados

- Variáveis e tipos de dados para personagens, atributos e mensagens.
- Operadores de comparação, lógicos e aritméticos para filtros, validação e cálculos.
- Condicionais para validação de dados e cálculo de CA.
- Repetições e arrays para percorrer classes, raças, atributos e equipamentos.
- Objetos para descrever classes, raças e fichas.
- Funções para filtrar, renderizar detalhes e montar e exibir a ficha.
- DOM e eventos de clique, entrada de texto, seleção e envio de formulários.
- `localStorage` para guardar a ficha neste navegador.

## Estrutura do projeto

```text
entrega-dnd/
|-- index.html
|-- css/
|   `-- estilo.css
|-- js/
|   |-- regras.js
|   `-- script.js
|-- imagens/
|   `-- LEIA-ME.txt
`-- README.md
```

O diretório `imagens/` está reservado para imagens adicionais; a ilustração atual do dado é feita com CSS.

## Regras e escopo

As descrições são resumos introdutórios das [regras básicas de classes](https://www.dndbeyond.com/sources/dnd/basic-rules-2014/classes) e [raças](https://www.dndbeyond.com/sources/dnd/basic-rules-2014/races) da edição de 2014. Os atributos informados na ficha são valores finais, já com os bônus raciais. A ficha calcula valores básicos de nível 1, mas não automatiza sub-raças, subclasses, magias ou todas as proficiências raciais. Confirme escolhas e regras com o mestre.
