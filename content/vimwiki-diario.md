---
title: "Meu fluxo de trabalho com Vimwiki"
summary: "Utilização como diário para: reunioes e wiki"
date: 2023-03-18T02:57:00-03:00
tags: ["vim"]
draft: false
---

[Vimwiki](https://github.com/vimwiki/vimwiki) é um plugin para facilitar criação e edição de arquivos, tentando diminuir ao máximo o atrito entre navegar, criar e atualizar documentos de tarefas. Ele é utilizavel para criação de wikis pessoais ou diário (que não deixa de ser uma wiki). Utilizo-o diariamente da seguinte maneira:

1. Inicio o dia abrindo meu diário do dia anterior `leader-w-leader-y` e falo sobre na daily. A tecla `leader` é definição pessoal, utilizo espaço
2. Faço um split `:split` e crio o documento do dia atual `leader-w-leader-w`
3. Movo os itens não concluidos ontem para hoje e/ou adiciono tarefas novas
4. Mantenho um padrão de escrita que não conflite sobre uma tarefa feita ou não, exemplos:
    1. Para uma tarefa realizada eu não escrevo `fiz pr do ticket X`, mas sim `pr do ticket X`
    2. para uma tarefa que irei realizar não escrevo `vou fazer o pr do ticket X` e muito menos `fazer o pr do ticket X`. Utilizo a mesma estrutura anterior: `pr do ticket X`
5. Os itens são listas `- [ ]`, cujo podem ser marcados ou desmarcados com `ctrl-space`
6. Ao final dia faço um resumo em `retro.wiki`

## Tarefas complexas

Quando o ticket é longo ou faço questão de documentá-lo, crio um um arquivo com nome de seu id dentro do diário. Assim centralizo informaçoes e tarefas do ticket mas separo o que pretendo fazer hoje.

```md
- [X] criação do ambiente [[XXXXXXXXX]]
- [ ] investigação do erro de envio de email [[YYYYYYYYY]]
- [ ] documentação do endpoint abcdefg [[YYYYYYYYY]]
```

> `[[arquivo]]` é a representação de um link para um `arquivo.wiki`. Basta apertar enter tanto para criá-lo quanto acessá-lo.

## Retro e brag document

Ao final do dia confirmo o que foi feito e no arquivo que registro as retros faço um relato sobre como foi o dia: dificuldades, conquistas e sentimento geral do dia.

```md
💚 MUITO BOM
🔵 OK
⚠️  ESTRANHO, SITUAÇÃO PODE FICAR RUIM
🔴 RUIM
❌ NÃO FIZ

| data           | ❓ | relato                                                              | sprint |
|----------------|----|---------------------------------------------------------------------|--------|
| [[2023-07-31]] | 🔵 | Desenvolvimento dos tickets com a orientação adequada               | 2      |
| [[2023-07-28]] | ⚠️  | Muitos alinhamentos sobre os tickets, não consegui iniciar nenhum   | 2      |
| [[2023-07-27]] | 🔵 | Reuniões de inicio de sprint, planning ok                           | 2      |
| [[2023-07-26]] | ❌ |                                                                     | 1      |
| [[2023-07-25]] | 💚 | Finalizei as demandas, documentações pendentes e revisei todos PRs  | 1      |
| [[2023-07-24]] | 🔵 | Obtive a orientação adequada e estou motivado a finalizar a demanda | 1      |
| [[2023-07-21]] | 🔴 | Não consegui suprir nenhuma das demandas                            | 1      |
```

> Vimwiki tem um comando para criar tabelas de maneira dinamica (`:VimwikiTable`) e juntamente com `tab` mantém corretamente os espaçamentos

> Deixo o arquivo `retro.wiki` dentro da pasta de diário para ter um link com as datas (`[[2023-07-21]]`)

A ideia do registro é atacar 2 frentes: facilitar na retro e sprint review; montar um [brag document](https://eltonminetto.dev/post/2022-04-14-brag-document/)

## Benefícios

- Daily direto ao ponto
- Organização pessoal com multiplas sub tarefas
- Orientação do dia com senso de progresso

## Dicas

### Navegação

- `tab` e `shift-tab` pula entre links
- `enter` acessa arquivo do link ou cria-o se necessário
- `backspace` retorna para o arquivo anterior antes do pulo do link
- Utilize folds para facilitar a leitura:
    - `zM` fecha todos `zR` abre todos
    - `zj` e `zk` navega entre folds

### Utilitários

- `leader-w-c` no modo `Visual` permite colorir
- `glr` em uma lista ordenada, atualiza os numeros
- `:VimwikiRebuildTags` e `:VimwikiGenerateTagLinks TODO STARTED XXX<CR>` listará as tags `:TODO:` `:STARTED:` etc no arquivo

## Minhas configurações (em Lua)

```lua
vim.g.vimwiki_list = {
  {
    name = 'my',
    path = '~/vimwiki/my',
    auto_generate_links = 1,
    auto_diary_index = 1,
    auto_tags = 1,
    exclude_files = { 'index.wiki' }
  },
  {
    name = 'trampo',
    path = '~/vimwiki/trampo',
    auto_generate_links = 1,
    auto_diary_index = 1,
    auto_tags = 1,
    exclude_files = { 'index.wiki' }
  },
}

vim.g.vimwiki_folding = 'expr'
vim.g.vimwiki_auto_chdir = 1
```

## FAQ

1. O plugin tem suporte a `.md`, por que usar `.wiki`? R: Pela facilidade de navegação de `[[]]` e o export para html existente com `:VimwikiAll2HTML`
2. Quais outros usos do vimwiki alémd e trabalho? Wiki pessoal (substituindo Notion), wiki de livros lidos (substituindo blogs)
