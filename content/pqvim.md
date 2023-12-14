---
title: "Motivos para utilizar Vim/Neovim"
summary: "Por que escovar bit?"
date: 2020-07-29T10:00:00-03:00
tags: ["vim"]
draft: false
---

- Absurdamente leve
- Open source, livre e gratuito
- Popular e bem estabelecido na comunidade
- Utilizável pelo terminal
- Por ser um editor estilo modal (não insere texto em qualquer tecla, precisa estar no modo correto), suporta atalhos/comandos mais agradáveis ao invés de `ctrl + ...` `alt + ...` `ctrl + alt + ...`
- Multi plataforma
- Configurável através de arquivos que podem ser versionados
- Descarta completamente a utilização do mouse, porém pode continuar sendo usado
- Divertido, pois "gamefica" navegação de código e edição de texto naturalmente
- Possui o suficiente para programar (sintaxe, sugestões de texto, pesquisa, substituição etc). Caso queira, precisa entender as limitações e saber configurar individualmente *debug*, *go to definition* e *autocomplete* por linguagem

## Vim ou Neovim?

### Vim 👍

- Gvim: editor de texto com interface gráfica para não precisar utilizar o terminal. É muito agradável e funcional no Windows e Linux

### Neovim 👍

- LSP client nativo: integração maior e melhor para *autocomplete*, *gotodefinition*, *lint* etc
- Lua para desenvolvimento de plugins: lua facilita mais o desenvolvimento de plugins do que o vimscript
- Comunidade + ativa de pacotes: por possuir suporte ao lua, a comunidade de plugins é mais ativa
- Além de todos plugins existentes no vim, tem alguns exclusivos: telescope, cmp, luasnip etc

## FAQ

1. Vou ser um programador melhor com Vim/Neovim? R: Não
2. Vou ser um programador mais eficiente? R: Depende unicamente das suas necessidades e se o Vim/Neovim sana elas melhor do que outras ferramentas
3. Preciso de muitos plugins para trabalhar? R: Particularmente, utilizo poucos plugins para manter meu ambiente o mais simples possível
4. Vou perder muito tempo configurando? R: Depende, você pode configurar o mínimo possível e isso não tornará seu ambiente ruim. Criei um ["preset"](https://github.com/nenitf/vi-vim-venci) caso tenha interesse
5. Quanto tempo para dominar? R: Uns 3 meses de uso constante acho, utilizo desde 2018
6. Como dominar o mais rápido possível? R: Todo dia aprender pelo menos uma funcionalidade nova preferencialmente teclas de movimentação e edição
