+++
title = "Organizando seu conhecimento com vimwiki"
summary = "PKM, Bullet journal e segundo cerebro"
date = "2024-01-05T10:00:00-03:00"
tags = ["vim", "vimwiki", "org"]
draft = false
+++

Publico esse conteúdo com a intenção de inspirar ou refletir sobre como constituir um PKM/commonplace book com [Vimwiki](https://github.com/vimwiki/vimwiki)

# TL;DR Fluxo comum

## Acessando arquivos relevantes

- Abro `index.wiki` com `leader-w-w`
- Uso `tab` para navegar entre os `[[links]]`
- Ao parar com um cursor em `[[projeto]]`, `[[area]]`, `[[recurso]]` ou `[[arquivo]]` utilizo `gr` para criar uma lista dinamica dos arquivos existentes
    - Não navego diretamente pois os nomes dos arquivos são IDs, portanto a pesquisa deve ser no conteudo dele

## Criando um arquivo

- Crio arquivos com o comando `:PARAfile`, assim é criado um arquivo na raiz do diretório com um nome aleatorio. Isso é feito para desincentivar renomear arquivos e quebrar links
- Ao criar um arquivo defino sua categoria (só pode uma) com tag entre: *projeto*, *area*, *recurso* e *arquivo*

## Pesquisando arquivos

Caso não tenha encontrado algum arquivo, pesquiso pelo seu conteudo com `:Telescope live_grep`

# Metodo PARA com tags

O metodo `PARA` é proposto no livro "Construindo um segundo cerebro" de Tiago Forte, onde existem as seguintes categorizações de informação:

- **P**rojetos: Possuem um escopo específico, alta prioridade e pretendem ser finalizados
- **A**reas: Assuntos de interesse e monitoramento constante, são essenciais para o presente
- **R**ecursos: Temas interessantes mas não tão presentes, um dia podem virar projeto ou área
- **A**rquivo: Tópicos que perdaram interesse ou projetos finalizados

A proposta é separar em pastas, por cada informação ser de somente **UMA** dessas categorias, porém para facilitar na estruturação com vimwiki foram utilizadas tags. Como a categorização/status mudam, caso um arquivo referencie outro ele irá mudar. Dito isso foram feitas duas modificações:

- Utilização de tags, assim todos projetos/areas/recursos/arquivos podem ser pesquisados pela tag adequada, crinado uma lista dinamica com os tópicos.
- Todo arquivo novo é gerado com nome dinâmico e único

# Estudos

- Anotações de cursos *muito tecnicos* são feitos diretamente nos seus assuntos, exemplo: O que for aprendido no curso de Go deve ser acrescentado no seu arquivo
- Anotações de cursos *comportamentais* devem ser anotados como um projeto, cujo ao seu final podem virar alguma pagina
- Livros diretamente no [Calibre](https://calibre-ebook.com/)
- Todo curso feito, livro lido e projeto finalizado deve ter sua tag renomeada para *arquivo*

# Observações

- Usar multiplos h1 facilita na organização
- Utilizo a tag de `collection` para arquivos que só servem de lista de outros arquivos de um mesmo escopo. Como por exemplo livros que quero ler, projetos que quero iniciar, citações ligadas a seus livros etc. Ideia vinda do método Bullet Journal
- Não deixo tudo na mesma wiki, tenho uma pro pkm, outro pro trabalho e mais uma para esse blog (aceita markdown)

# FAQ

1. Está plenamente satisfeito? Não, sinto falta de encaixar no pkm: um calendario com minhas tarefas agendadas, rastreador de tempo, visualização de imagens copiadas e desenho livre de fluxogramas
