+++
title = "Por que usar Vim?"
summary = "Por que escovar bit?"
date = "2020-07-29T10:00:00-03:00"
toc = true
tags = ["vim"]
draft = false
+++

# Contents

- [Motivos](#motivos)
    - [Possui o mínimo necessário](#possui-o-mnimo-necessrio)
    - [Absurdamente leve](#absurdamente-leve)
    - [Open source e gratuito](#open-source-e-gratuito)
    - [Multi plataforma](#multi-plataforma)
    - [Popular e bem estabelecido na comunidade](#popular-e-bem-estabelecido-na-comunidade)
    - [Utilizável pelo terminal](#utilizvel-pelo-terminal)
    - [Atalhos/comandos mais agradáveis](#atalhoscomandos-mais-agradveis)
    - [Configuração versionável](#configurao-versionvel)
    - [Mouse opcional](#mouse-opcional)
    - [Divertido](#divertido)
- [Vim ou Neovim?](#vim-ou-neovim)
    - [Vim 👍](#vim-)
    - [Neovim 👍](#neovim-)
- [FAQ](#faq)

# Motivos

## Possui o mínimo necessário

Os requisitos mais básicos de um editor para programação são:

- Syntax highlight
- Sugestão de texto
- Criação/pesquisa de arquivos
- Pesquisa de texto no projeto

## Absurdamente leve

Já passei muita raiva com a demora para abrir um projeto ou até um arquivo, sem contar indexação e pesquisa de texto no projeto inteiro. Com o Vim, o que eu quero fazer simplesmente ✨ acontece ✨

## Open source e gratuito

- Open source: pode acompanhar o desenvolvimento e issues se for do seu interesse
- Gratuito: não precisa se preocupar em conseguir algum desconto e também deixar de recomendar, pois justamente nem todo mundo tem interesse em pagar por uma licença

## Multi plataforma

É um problema que poderia passar se utilizasse mais de um computador com sistemas operacionais diferentes, seja um do trabalho e outro em casa por exemplo.

## Popular e bem estabelecido na comunidade

Uma comunidade ativa significa atualizações constantes do editor e plugins, seja de correções de bugs ou desenvolvimento de funcionalidades.

## Utilizável pelo terminal

Não precisa carregar uma interface gráfica ou mudar seu hábito de abrir o terminal para rodar comandos do projeto.

## Atalhos/comandos mais agradáveis

Por ser um editor estilo modal (não insere texto em qualquer tecla, precisa estar no modo correto), letras são usadas. Um atalho `<ctrl>p` é mais cansativo que um `<space>f`; Ao invés de usar setas ou o mouse, utilizar `h` `j` `k` `l` etc.

## Configuração versionável

A personalização é acessível facilmente e livre o suficiente para ser um projeto seu a parte, permitindo reutilização em mais de um computador com tranquilidade.

## Mouse opcional

O mouse é ótimo para muitas coisas, porém ficar tirando a mão do teclado para navegação é desnecessário. Suas mãos ja estão no lugar adequado, movimentar elas indo e voltando é pouco eficiente.

O vim permite você utilizar tanto setas quanto o mouse, com um ótimo suporte, porém é *opcional*.

## Divertido

Gamefica navegação de código e edição de texto. Depois que é entendido a lógica dos atalhos, a mesma edição pode ser feitas de multiplas formas e a sensação de criar "combos" é sensacional.

Um exemplo mais prático, dada a seguinte função:

```
function nomeAntigo() {
    // ...
}
```

Seu cursor está no inicio da linha e você quer renomeá-la, você pode:

- Mover para a próxima palavra, editar até o final dela e inserir `nomeNovo`: `wcenomeNovo`
- Pular para a letra `A` da linha, editar toda a palavra e inserir `nomeNovo`: `fAciwnomeNovo`
- Mover várias vezes para o lado, entrar no modo Visual (seleção), mover várias vezes até o final, apagar, entrar no modo de inserção e escrever `nomeNovo`: `lllllllllvllllllllldinomeNovo`
- Entrar no modo de inserção ao final da linha, mover para a esquerda até o final do nome da função, apagar todo `nomeAntigo` e inserir `nomeNovo`: `A←←←←⇐⇐⇐⇐⇐⇐⇐⇐⇐⇐nomeNovo`

# Vim ou Neovim?

## Vim 👍

- Gvim: editor de texto com interface gráfica para não precisar utilizar o terminal. É muito agradável e funcional no Windows e Linux

## Neovim 👍

- LSP client nativo: integração maior e melhor para *autocomplete*, *gotodefinition*, *lint* etc
- Lua para desenvolvimento de plugins: lua facilita mais o desenvolvimento de plugins do que o vimscript
- Comunidade + ativa de pacotes: por possuir suporte ao lua, a comunidade de plugins é mais ativa
- Além de todos plugins existentes no vim, tem alguns exclusivos: telescope, cmp, luasnip etc

# FAQ

1. Vou ser um programador melhor com Vim/Neovim? R: Não
2. Vou ser um programador mais eficiente? R: Depende unicamente das suas necessidades e se o Vim/Neovim sana elas melhor do que outras ferramentas
3. Preciso de muitos plugins para trabalhar? R: Não, eu utilizo pouquissimos para manter meu ambiente o mais simples possível
4. Vou perder muito tempo configurando? R: Depende, você pode configurar o mínimo possível e isso não tornará seu ambiente ruim. Criei um ["preset"](https://github.com/neninja/vi-vim-venci) caso tenha interesse
5. Quanto tempo para dominar? R: Uns 3 meses de uso constante, mas obviamente depende muito
6. Como dominar o mais rápido possível? R: Todo dia aprender/ler pelo menos uma funcionalidade nova, preferencialmente teclas de movimentação e edição
7. Sente falta de algo no vim? Sim, plugins para facilitar a correção de conflitos e *pair programming*
