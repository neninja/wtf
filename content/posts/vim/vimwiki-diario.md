---
title: "Meu fluxo de trabalho com vimwiki"
summary: "Utilização como diário para: reunioes e wiki"
date: 2023-03-18T02:57:00-03:00
tags: ["vim"]
draft: false
---

[Vimwiki](https://github.com/vimwiki/vimwiki) é um plugin para facilitar criação e edição de arquivos, tentando diminuir ao máximo o atrito entre navegar, criar e atualizar documentos de tarefas. Ele é utilizavel para criação de wikis pessoais ou diário (que não deixa de ser uma wiki). Utilizo-o diariamente da seguinte maneira:

1. Inicio o dia abrindo meu diário do dia anterior <kbd>leader</kbd><kbd>w</kbd><kbd>leader</kbd><kbd>y</kbd> e falo sobre na daily. A tecla `leader` é definição pessoal, utilizo espaço
2. Faço um split `:split` e crio o documento do dia atual <kbd>leader</kbd><kbd>w</kbd><kbd>leader</kbd><kbd>w</kbd>
3. Movo os itens não concluidos ontem para hoje e/ou adiciono tarefas novas
4. Mantenho um padrão de escrita que não conflite sobre uma tarefa feita ou não, exemplos:
    1. Para uma tarefa realizada eu não escrevo `fiz pr do ticket X`, mas sim `pr do ticket X`
    2. para uma tarefa que irei realizar não escrevo `vou fazer o pr do ticket X` e muito menos `fazer o pr do ticket X`. Utilizo a mesma estrutura anterior: `pr do ticket X`
5. Os itens são listas `- [ ]`, cujo podem ser marcados ou desmarcados com <kbd>ctrl</kbd><kbd>space</kbd>
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
| data           | ❓ | relato                                                              |
|----------------|----|---------------------------------------------------------------------|
| [[2023-07-21]] | 👎 | Não consegui suprir nenhuma das demandas                            |
| [[2023-07-24]] | 🙏 | Obtive a orientação adequada e estou motivado a finalizar a demanda |
| [[2023-07-25]] | ✨ | Finalizei as demandas, documentações pendentes e revisei todos PRs  |
```

> Vimwiki tem um comando para criar tabelas de maneira dinamica (`:VimwikiTable`) e juntamente com <kbd>tab</kbd> mantém corretamente os espaçamentos

> Deixo o arquivo `retro.wiki` dentro da pasta de diário para ter um link com as datas (`[[2023-07-21]]`)

A ideia do registro é atacar 2 frentes: facilitar na retro e sprint review; montar um [brag document](https://eltonminetto.dev/post/2022-04-14-brag-document/)

## Dicas de navegação

- <kbd>tab</kbd> e <kbd>shift</kbd><kbd>tab</kbd> pula entre links
- <kbd>enter</kbd> acessa arquivo do link ou cria-o se necessário
- <kbd>backspace</kbd> retorna para o arquivo anterior antes do pulo do link

## Benefícios

- Daily direto ao ponto
- Organização pessoal com multiplas sub tarefas
- Orientação do dia com senso de progresso

## FAQ

1. O plugin tem suporte a `.md`, por que usar `.wiki`? R: Pela facilidade de navegação de `[[]]`
