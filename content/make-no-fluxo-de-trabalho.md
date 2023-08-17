---
title: "Facilitando a memorização de projetos com make"
summary: "Simpĺificação de comandos"
date: 2022-12-21T16:32:31-03:00
toc: true
tags: ["bash", "git"]
draft: false
---

Durante o trabalho preciso executar uma série de comandos, por vezes específico por projeto ou framework, e sentia falta da uniformização e simplificação desses.

O fluxo abaixo com os snippets resumem como é feito:

1. Adicionando uma propriedade no `~/.gitconfig`, permito utilizar mais outro `gitconfig` dependendo da pasta que estou no terminal (`pwd`)
2. O `gitconfig` específico da pasta (projeto) define um `gitignore` global
3. O `gitignore` global esconde o arquivo `meumakefile` (nome arbitrário)
4. Todos os alias são criados no `meumakefile`, e não importe o quanto eu o modifique ele não é visível no projeto
5. Com o alias `m`, simplifico o comando `make -f meumakefile i` como `m i`

{{< gravizo "Relação de arquivos" >}}
  digraph G {
    node [shape=box]
    gitignore[label="gitignore global"];
    gitconfigprojeto[label="gitconfig do projeto"];

    gitconfig -> gitconfigprojeto -> gitignore -> meumakefile;
    bashrc;
  }
{{< /gravizo >}}

```gitconfig
# `~/.gitconfig`
[includeIf "gitdir:~/dev/trampo/projetox/"]
    path = dev/trampo/.gitconfig-projetox
```

```gitconfig
# `~/dev/trampo/.gitconfig-projetox`
[core]
    excludesfile = ~/dev/trampo/.gitignore-projetox
```

```gitignore
# `~/dev/trampo/.gitignore-projetox`
meumakefile
```

```Makefile
# vim:set ff=unix ts=4 ss=4 sw=4 sta noet:
# nofixendofline
#%s/^[ ]\+/\t/g

# meumakefile

i:
	./vendor/bin/sail composer i

u:
	./vendor/bin/sail composer update

o:
	./vendor/bin/sail artisan optimize:clear
```

```shell
# ~/.bashrc
alias m="make -f meumakefile"
```

Funcionamento na pasta do projeto:
```shell
m i
m u
m o
```
