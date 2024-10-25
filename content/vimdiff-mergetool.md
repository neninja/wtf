---
title: "Vimdiff como mergetool"
summary: "Resolvendo conflitos de maneira simplificada e guiada"
date: 2023-03-18T02:57:00-03:00
tags: ["git", "vim"]
draft: false
---

1. Com Vimdiff devidamente configurado `git config merge.tool vimdiff`, execute `git mergetool`
2. O terminal renderizará com 4 janelas, sendo as 3 de cima representando em ordem e a ultima:
    1. O arquivo **LOCAL** antes do conflito
    2. O arquivo **BASE** (comum) do local e ao remoto
    3. O arquivo vindo do **REMOTE**.
    4. Em baixo como o arquivo está sendo mergeado para o commit
4. De preferência mantenha seu cursor de preferencia sempre na janela maior
5. Acesse algum diff
6. Utilize `:diffg NOME-DO-ARQUIVO` para escolher uma das modificações se achar necessário
    - `:diffg LO` utiliza o diff de **LO** CAL
    - `:diffg BA` utiliza o diff de **BA** SE (raro ser usado)
    - `:diffg RE` utiliza o diff de **RE** MOTE
    - Ou altere o arquivo na mão
7. Ao finalizar todas modificações que julgar necessário **SALVE** e **SAIA** com `:wqa`
8. Se existir, um novo arquivo com conflito será aberto, do contrário ficará no terminal aguardando commit

## Desistência

1. Caso queira cancelar, saia com `:cq`
2. Aborte o merge com `git merge --abort`

## Atalhos úteis

- `ctrl-w-w` alterna janelas
- `[c` e `]c` pula entre os diffs
- `dp` simplifica `:diffput` e `do` (*diff obtains*) simplifica `:diffget`, caso não seja necessário o nome do buffer (ideal com [diffconflicts](#diffconflicts))

## Alternativas

### diffconflicts

[Plugin](https://github.com/whiteinge/diffconflicts) de vim/nvim que simplifica o diff entre os arquivos abertos. Tendo somente duas janelas: *ours* e *theirs*, sendo a primeira a que deve ser atualizada. A ideia é interessante pois simplifica a quantidade de janelas para a efetividade do diff e por padrão ja presupoe que `ours` é correto. Basta alterar a janela especificada e fechar para confirmar com `:xa` ou `:cq` para abortar aquele arquivo.

> Lembre de utilizar `[c` `]c` e `do`

## Exemplo prático

Para validar estratégias de merge tool, recomendo meu projeto [exemplo_vim-merge-conflict](https://github.com/neninja/exemplo_vim-merge-conflict) com as instruções de como forçar conflitos
