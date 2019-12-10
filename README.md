# [wtf](http://neni.dev/wtf)
Conteúdo em markdown sobre assuntos que gosto de estudar.

## Funcionamento do projeto
Escrever conteudo em `_posts/assunto.md`, commitar e dar push na branch master do github.

## Ferramentas que o projeto necessita
### [Jekyll](https://jekyllrb.com/)
[SSG](https://www.staticgen.com/about) padrão do github que transforma o conteúdo com a marcação de markdown para html e monta as páginas/links.

### [Graphviz](https://www.graphviz.org/)
Programa que pode ler `.gv` e transformar em `.png`, facilitando a criação de diagramas. [Testa aí](https://dreampuf.github.io/GraphvizOnline).
- Manualmente
```sh
cd assets/assunto
dot -Tpng -O arquivo.gv

```
- Com script para a pasta inteira
```sh
cd assets/assunto
../../i
```
- Com script para arquivo específico inteira
```sh
../i assets/assunto/arquivo.gv
```

## Por quê está fazendo dessa maneira? Poderia usar latex, pandoc, powerpoint bla bla bla
1. Markdown é a linguagem mais simples para minha necessidade
2. Acho importante separar o conteúdo (arquivos em markdown) da apresentação (no momento somente em html)
3. O github-pages já automatiza a geração do site usando Jekyll, tornando desnecessária configuração prévia de ambiente de desenvolvimento. Dessa maneira é possível escrever diretamente o conteúdo de um assunto no próprio github.

## Todo
### Apostilas
* [ ] Go *parado*
* [ ] PHP
* [ ] Javascript *em andamento*
* [ ] Git *em andamento*
* [ ] Python
* [ ] Godot (engine e linguagem) *parado*

### Frontend
* [ ] Botão para copiar snippet
* [ ] Botão dark/light mode salvando preferência no cache do navegador
* [ ] Botão para aumentar, diminuir a fonte do texto
* [ ] Abstrair tema
