---
title: "Diff com vim"
summary: "Vim como ferramenta para diferenciar dois arquivos"
date: 2022-04-20T10:00:00-03:00
tags: ["vim"]
draft: false
---

Corriqueiramente preciso comparar dois arquivos, e no vim é fácil de ser feito:

1. Abra o arquivo
2. Abra o segundo arquivo (``:vs outro.txt`` ou ``:sp outro.txt``)
3. Inicialize o *diffmode* ``:diffthis``
4. Troque de janela <kbd>ctrl</kbd><kbd>w</kbd><kbd>w</kbd>
5. Inicialize o *diffmode* ``:diffthis``

> Resumo do passo 3, 4 e 5 caso só haja duas `windows`: ``:windo diffthis``

> Resumo do passo 2, 3, 4 e 5 ``:vert diffsplit outro.txt``
