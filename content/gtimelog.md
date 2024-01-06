+++
title = "Gtimelog: timetracking não intrusivo"
summary = "Rastreador de tempo absurdamente simples e intuitivo"
date = "2024-01-06T11:00:00-03:00"
tags = ["org"]
draft = false
+++

[Encontrei](https://code.google.com/archive/p/vimwiki/wikis/TimeTrackingWithVimwiki.wiki) o [gtimelog](https://gtimelog.org/) esse software pesquisando sobre como adicionar rastreamento de tempo na minha rotina com [Vimwiki](./vimwiki-profissionalmente.md). Ela é simples e opera através de arquivos de texto, facilitando a edição se necessária.

## Utilização

1. Inicio do dia abro a aplicativo, adiciono um registro como "começando o dia" e o deixo aberto
2. Enquanto faço a primeira tarefa do dia não coloco nada
3. Quando vou **trocar** de tarefa, cadastro a tarefa que **não estou mais fazendo**
4. Durante o dia faço e cadastro o que fiz
5. Ao final, podemos ver o relatorio com `ctrl-d`

## Dicas

### Melhore o relatório com um input mais rico

- `projetoX: ...` cria o registro informando que a tarefa `...` faz parte do `projetoX`, dessa forma diferentes tarefas podem ser agrupadas para um mesmo escopo
- `... **` categoriza o registro como não sendo de trabalho
- `... -- tag1 tag2 tag3` adiciona *tags* ao registro

### Tasks

- Utilize a janela de tasks (possui submenu ou arquivo acesse o path do arquivo) para deixar tarefas frequentes
- Mantenha ao menos projetos corriqueiros, dessa forma vai servir para completar o input e manter consistência do nome dos projetos

## Adendos

- Estou tentando deixar o fluxo somente no Vimwiki, porém é uma ótima GUI e estou cogitando ficar nela
- O programa exige uma mudança de mentalidade, ao usar ela **não** pensamos no que **vamos** fazer, e sim no que **fizemos**. Servindo como um momento de reflexão
