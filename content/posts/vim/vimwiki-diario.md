---
title: "Meu fluxo de trabalho com vimwiki"
summary: "Utilização como diário para: reunioes e wiki"
date: 2023-03-18T02:57:00-03:00
tags: ["vim"]
draft: false
---

[Vimwiki](https://github.com/vimwiki/vimwiki) é um plugin para facilitar criação e edição de arquivos, tentando diminuir ao máximo o atrito entre navegar, criar e atualizar documentos de tarefas.

1. Inicio o dia abrindo meu documento do dia anterior <kbd>leader</kbd><kbd>w</kbd><kbd>leader</kbd><kbd>y</kbd> e falo sobre na daily. A tecla `leader` é definição pessoal, utilizo espaço
2. Faço um split `:split` e crio o documento do dia atual <kbd>leader</kbd><kbd>w</kbd><kbd>leader</kbd><kbd>w</kbd>
3. Movo os itens não concluidos ontem para hoje
4. Mantenho um padrão de escrita que não conflite sobre uma tarefa feita ou não, exemplos:
    1. Para uma tarefa realizada eu não escrevo `fiz pr do ticket X`, mas sim `pr do ticket X`
    2. para uma tarefa que irei realizar não escrevo `vou fazer o pr do ticket X` e muito menos `fazer o pr do ticket X`. Utilizo a mesma estrutura anterior: `pr do ticket X`
5. Os itens são listas `- [ ]`, cujo podem ser marcados ou desmarcados com <kbd>ctrl</kbd><kbd>space</kbd>

## Tarefas complexas

Tarefas longas que exijam multiplos checkbox ainda são resumidas no diário, porém também são criados arquivos referentes. Inserindo `[[ticket_nome-final-do-arquivo]]` e apertando enter automaticamente gera um link que:
1. Cria o arquivo
2. Acessa-o

## Dicas de navegação

- <kbd>tab</kbd> e <kbd>shift</kbd><kbd>tab</kbd> pula entre links
- <kbd>enter</kbd> acessa arquivo do link ou cria-o se necessário
- <kbd>backspace</kbd> retorna para o arquivo anterior antes do pulo do link

## Benefícios

- Daily direto ao ponto
- Organização pessoal com multiplas sub tarefas
- Orientação do dia com senso de progresso
