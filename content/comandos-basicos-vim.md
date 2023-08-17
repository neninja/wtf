---
title: "Conhecimento inicial de Vim que recomendo"
summary: "O básico para suportar e amar o Vim"
date: 2020-07-29T10:00:00-03:00
tags: ["vim"]
draft: false
---

## Movimentação
### Dentro do arquivo

> `:h motion.txt`

- ``h`` esquerda
- ``j`` baixo
- ``k`` cima
- ``l`` direita
- ``gg`` primeira linha
- ``G`` ultima linha
- ``0`` primeira coluna da linha
- ``^`` primeira coluna com texto da linha
- ``$`` ultima coluna da linha (incluindo quebra)
- ``g_`` ultima coluna da linha com texto da linha
- ``fx`` carácter ``x`` à frente na linha (``,`` volta e ``;`` avança)
- ``Fx`` carácter ``x`` atrás na linha (``,`` volta e ``;`` avança)
- ``tx`` carácter anterior ``x``  à frente na linha (``,`` volta e ``;`` avança)
- ``Tx`` carácter anterior ``x`` atrás na linha (``,`` volta e ``;`` avança)
- ``*`` palavra (``N`` volta e  ``n`` avança)
- ``w`` avança para o início de uma `word`
- ``W`` avança para o início de uma `WORD`
- ``e`` avança para o final de uma `word`
- ``E`` avança para o final de uma `WORD`
- ``b`` volta para o início de uma `word`
- ``B`` volta para o final de uma `WORD`
- ``:25`` linha ``25``
- ``%`` início ou final do fechamento de `{[(<`

> "word" é uma palavra delimitada por non-keyword (pontuação, espaço e números) e "WORD" por espaço somente

#### Scroll
- ``zt``
- ``zb``
- ``zz``

#### Para inserção
- ``i`` esquerda do cursor
- ``a``  direita do cursor
- ``I`` início da linha (alias de ``^i``)
- ``A`` fim da linha (alias de ``g_a``)
- ``o`` nova linha abaixo da atual
- ``O`` nova linha acima da atual
- ``gi`` volta para a posição do ultimo `insertmode`

<!-- ### Entre arquivos -->
<!-- ## Registradores -->
<!-- ## Pesquisa/Substituição -->


## Objetos

É possível instruir uma seleção para executar um comando, como deletar substituir ou até selecionar (``:h objects``). Essa instrução é a delimitação do que o comando deve abranger, cujo pode ser de um verbo com movimentação ou verbo com objeto:

- ``dd`` apaga uma linha
  ```
  v
  perfer et obdura!
  dolor hic tibi proderit olim;
  ```
  ```
  dolor hic tibi proderit olim;
  ^
  ```

- ``de`` apaga do cursor até o final de uma palavra. É um verbo com movimentação (``d`` + ``e``)
  ```
  --v
  perfer et obdura!
  dolor hic tibi proderit olim;
  ```
  ```
  --v
  pe et obdura!
  dolor hic tibi proderit olim;
  ```
  
- ``diw`` apaga a palavra sob o cursor. É um verbo com objeto (``d`` **i**nside **w**ord)
  ```
  --v
  perfer et obdura!
  dolor hic tibi proderit olim;
  ```
  ```
  v
   et obdura!
  dolor hic tibi proderit olim;
  ```

A delimitação de objetos é feita atraves de uma instrução + substantivo, sendo:

|instrução|letra|
|-|-|
|entre (inner)|i|
|ao redor (outer)|a|
|até (find)|f|
|até antes (until)|t|

|substantivo|letra|
|-|-|
|aspas|`"`|
|apóstrofo|`'`|
|parênteses| `(` ou `)`|
|chaves|`{` ou `}`|
|colchetes|`[` ou `]`|
|maior/menor|`<` ou `>`|
|palavra|`w`|
|parágrafo|`p`|
|sentença|`s`|
|`<tag></tag>`|`t`|

## Pesquisa e substituição

|descrição   |escopo |comando                                   |
|------------|-------|------------------------------------------|
|pesquisa    |arquivo|`/texto procurado`                      |
|substituição|arquivo|`:%s/original/substituto/g`               |
|pesquisa    |projeto|`:vimgrep /texto procurado/ **/*.php` e `:cw`|
