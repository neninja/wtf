---
title: "Compiler, make e errorformat"
summary: "Execução de comandos no vim"
date: 2022-04-20T10:00:00-03:00
tags: ["vim"]
draft: false
---

Vim tem embutido uma forma de interpretar mensagens de erro, facilitando o pulo para o arquivo apontado na mensagem.

Essa interpretação é feita através da lista da variável `errorformat`, cujo lê a mensagem e encaixa no primeiro "regex".

---

Exemplo com [Go](https://golang.org/)

```go
package main

import (
	"fmt"
)

func main() {
	msg = "Exemplo de texto"
	fmt.Println(msg)
}
```

O output é:
```txt
# command-line-arguments
.\main.go:8:2: undefined: msg
.\main.go:9:14: undefined: msg   
```

Para configurar de maneira simples, primeiro precisamos definir o `makeprg` responsável por executar o arquivo e após as tratativa de linhas de erro em `errorformat`.

```vim
" dentro de <runtimepath>/ftplugin/go.vim

" go run <nome do buffer>
setl makeprg=go\ run\ %

setl errorformat=%f:%l:%c:\ %m,%-G%.%#
```

Agora basta executar `:make|cw` que a janela de *quickfix* vai abrir, permitindo acessar o arquivo com erro.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7t27cmlp6j3w8aaafuv0.gif)

**Sugestão**: Crie um map para executar o comando, como ``nmap <space>r :silent make|cw<CR>``

## Formatação do errorformat

Instruções do *errorformat*
1. É uma variável que recebe uma lista separada por vírgula
2. Assim que bater na primeira "regex" para de processar demais regras
3. O regex implícito básico funciona sempre iniciando com `%`
4. Caso seja necessário utilizar espaço, pode ser feito com `\ `

### Unidades

- `%f`
Nome de arquivo

- `%l`
Numero da linha

- `%c`
Numero da coluna

- `%m`
Mensagem de erro

- `\\s`
Espaço

- `%#`
Zero ou mais

- `%\\+`
Um ou mais

- `%A`
Inicia erro que possui múltiplas linhas

- `%C`
Continuação da mensagem de erro que possui múltiplas linhas. Agrega valor ao regex com `%A` prévio.

- `%Z`
Ultima linha da mensagem de erro que possui múltiplas linhas. Agrega valor ao regex com `%A` prévio.

- `%-G`
Ignora a mensagem que seguir com o padrão

### Usos comuns

|código|interpretação|exemplo|
|------|-------------|-------|
|`%f:%l:%c\ %m`|filename:linha:coluna espaço mensagem restante|`main.go:8:2 undefined: msg`|
|`%.%#`|.*|`qualquer texto`|
|`%-G%.%#`|.*|`Ignora quaisquer textos`|

## Compiler
> `:h write-compiler-plugin`

Um compilador é uma configuração pronta de `makeprg` e `errorformat` com nome, facilitando sua troca. Por exemplo, com Go podemos ter um `compiler` *gorun* que serve para executar o código e outro como *gotest* para testá-lo, e assim tratar de maneira diferente os erros e a execução.
Existe uma convenção para a escrita de *compilers*, precisando ficar em `/compiler` dentro do `runtimepath`. O Vim já possui diversos, basta copiar a estrutura e atualizar o nome do compiler, `makeprg` e `errorformat`.
Abaixo *gorun* e *gotest* mencionados e outros úteis:

```vim
" Vim compiler file
" Compiler:     Go
" Maintainer:	Felipe Silva
" Last Change:	2020 Sep 17

if exists('current_compiler')
  finish
endif
let current_compiler = 'gorun'

if exists(':CompilerSet') != 2
  command -nargs=* CompilerSet setlocal <args>
endif

let s:save_cpo = &cpo
set cpo-=C

CompilerSet makeprg=go\ run\ %

" THANKS: http://vimdoc.sourceforge.net/htmldoc/quickfix.html#errorformat-LaTeX
" THANKS: https://flukus.github.io/vim-errorformat-demystified.html
" THANKS: https://stackoverflow.com/a/29102995/9881278
" THANKS: https://github.com/wincent/wincent/blob/b38dc93bb5/roles/dotfiles/files/.vim/after/compiler/README.md

CompilerSet errorformat=%-G#%.%#
CompilerSet errorformat+=%-G%.%#panic:\ %m
CompilerSet errorformat+=can\'t\ load\ package:\ %m
CompilerSet errorformat+=%f:%l:%c:\ %m
CompilerSet errorformat+=%f:%l:\ %m
CompilerSet errorformat+=%*\\s%f:%l\ %m
CompilerSet errorformat+=%C%m

let &cpo = s:save_cpo
unlet s:save_cpo

" vim: sw=2 sts=2 et
```
```vim
" Vim compiler file
" Compiler:	    Go
" Maintainer:	Felipe Silva
" Last Change:	2021 Nov 2

if exists('current_compiler')
  finish
endif
let current_compiler = 'goimports'

if exists(':CompilerSet') != 2
  command -nargs=* CompilerSet setlocal <args>
endif

let s:save_cpo = &cpo
set cpo-=C

CompilerSet makeprg=goimports\ -w\ %

CompilerSet errorformat+=%f:%l:%c:\ %m
CompilerSet errorformat+=%f:%l:\ %m

let &cpo = s:save_cpo
unlet s:save_cpo

" vim: sw=2 sts=2 et
```
```vim
" Vim compiler file
" Compiler:     Go
" Maintainer:	Felipe Silva
" Last Change:	2020 Sep 17

if exists('current_compiler')
  finish
endif
let current_compiler = 'gotest'

if exists(':CompilerSet') != 2
  command -nargs=* CompilerSet setlocal <args>
endif

let s:save_cpo = &cpo
set cpo-=C

CompilerSet makeprg=go\ test

" THANKS: http://vimdoc.sourceforge.net/htmldoc/quickfix.html#errorformat-LaTeX
" THANKS: https://flukus.github.io/vim-errorformat-demystified.html
" THANKS: https://stackoverflow.com/a/29102995/9881278
" THANKS: https://github.com/wincent/wincent/blob/b38dc93bb5/roles/dotfiles/files/.vim/after/compiler/README.md

CompilerSet errorformat=%-G#%.%#
CompilerSet errorformat+=%-G%.%#panic:\ %m
CompilerSet errorformat+=%-GFAIL%.%#
CompilerSet errorformat+=%-Gexit%.%#
CompilerSet errorformat+=%-GPASS%.%#
CompilerSet errorformat+=%-Gok%.%#
CompilerSet errorformat+=can\'t\ load\ package:\ %m
CompilerSet errorformat+=%f:%l:%c:\ %m
CompilerSet errorformat+=%f:%l:\ %m
CompilerSet errorformat+=%*\\s%f:%l\ %m
CompilerSet errorformat+=%+A---\ FAIL:\ Example%.%#
CompilerSet errorformat+=%C%m

let &cpo = s:save_cpo
unlet s:save_cpo

" vim: sw=2 sts=2 et
```
```vim
" Vim compiler file
" Compiler:     PHP
" Maintainer:	Felipe Silva
" Last Change:	2020 Sep 30

if exists('current_compiler')
  finish
endif
let current_compiler = 'phplint'

if exists(':CompilerSet') != 2
  command -nargs=* CompilerSet setlocal <args>
endif

let s:save_cpo = &cpo
set cpo-=C

CompilerSet makeprg=php\ -ln\ %

" THANKS: http://vimdoc.sourceforge.net/htmldoc/quickfix.html#errorformat-LaTeX
" THANKS: https://flukus.github.io/vim-errorformat-demystified.html
" THANKS: https://stackoverflow.com/a/29102995/9881278
" THANKS: https://github.com/wincent/wincent/blob/b38dc93bb5/roles/dotfiles/files/.vim/after/compiler/README.md

" THANKS: https://stackoverflow.com/a/7272248/9881278
" THANKS: https://stackoverflow.com/a/7193830/9881278
" THANKS: https://vim.fandom.com/wiki/Runtime_syntax_check_for_php

CompilerSet errorformat=Parse\ error:\ %m\ in\ %f\ on\ line\ %l,%-GErrors\ parsing\ %f,%-G%.%#
" CompilerSet errorformat=%m\ in\ %f\ on\ line\ %l,%-GErrors\ parsing\ %f,%-G
" CompilerSet errorformat=PHP\ Parse\ error:\ %m\ in\ %f\ on\ line\ %l,%-GErrors\ parsing\ %f,%-G%.%#

let &cpo = s:save_cpo
unlet s:save_cpo

" vim: sw=2 sts=2 et
```
```vim
" Vim compiler file
" Compiler:     PHP
" Maintainer:	Felipe Silva
" Last Change:	2020 Sep 30

if exists('current_compiler')
  finish
endif
let current_compiler = 'phpunit'

if exists(':CompilerSet') != 2
  command -nargs=* CompilerSet setlocal <args>
endif

let s:save_cpo = &cpo
set cpo-=C

CompilerSet makeprg=composer\ test\ %

" THANKS: http://vimdoc.sourceforge.net/htmldoc/quickfix.html#errorformat-LaTeX
" THANKS: https://flukus.github.io/vim-errorformat-demystified.html
" THANKS: https://stackoVerflow.com/a/29102995/9881278
" THANKS: https://github.com/wincent/wincent/blob/b38dc93bb5/roles/dotfiles/files/.vim/after/compiler/README.md

" THANKS: https://stackoverflow.com/a/5296062/9881278
" THANKS: https://github.com/haginaga/vim-compiler-phpunit

CompilerSet errorformat=%E%n)\ %.%#:%o
CompilerSet errorformat+=%-G%.%#FAILURES!%.%#
CompilerSet errorformat+=%-G%.%#WARNINGS!%.%#
CompilerSet errorformat+=Fatal\ error:\ %m
CompilerSet errorformat+=%Z%f:%l
CompilerSet errorformat+=%W%f:%l:
CompilerSet errorformat+=%C%m
CompilerSet errorformat+=%C
CompilerSet errorformat+=%-G%.%#

let &cpo = s:save_cpo
unlet s:save_cpo

" vim: sw=2 sts=2 et

```

Para trocar de um para outro basta utilizar `:compiler <nome>`, por exemplo: `:compiler gorun` ou `:compiler gotest`.

## Créditos:
- [Wincent](https://github.com/wincent/wincent/blob/b38dc93bb5/roles/dotfiles/files/.vim/after/compiler/README.md)
- [flukus](https://flukus.github.io/vim-errorformat-demystified.html)
- [Go format](https://vi.stackexchange.com/a/4808/28875)
- [vimdoc](http://vimdoc.sourceforge.net/htmldoc/quickfix.html#errorformat-LaTeX)
- [Duvidas gerais](https://stackoverflow.com/a/29102995/9881278)
 
