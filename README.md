# [wtf](http://wtf.neni.dev)

## Ambiente
- Clonar o projeto com ``git clone https://github.com/nenitf/wtf.git``

### Setup projeto (sem docker-compose)
- Instalar ruby. Testar instalação com: ``ruby -v`` e ``gem -v``
    - [Windows](https://jekyllrb.com/docs/installation/windows/)
    - [Debian](https://www.ruby-lang.org/pt/documentation/installation/#apt): ``sudo apt-get install ruby-full build-essential zlib1g-dev``
- Instalar jekyll com ``gem install jekyll bundler`` ou ``sudo gem install jekyll bundler``
    - Testar instalação com: ``jekyll -v``
- Executar ``bundle update github-pages``.
- Ativar hotreload com ``bundle exec jekyll serve``
- Acessar `localhost:4000`
- Cancelar a qualquer momento com `Ctrl-C` no terminal

### Desenvolver locamente (com docker-compose)
- Ativar hotreload com ``docker-compose up``
- Acessar `localhost:4000`
- Cancelar a qualquer momento com `Ctrl-C` no terminal
> [Obrigado Joel](https://github.com/joeltennant/Jekyll-and-Docker-Compose)

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

## Padronização de commits
Todos os título de commit devem possuir a seguinte estrutura: ``<tipo>[(<escopo>)]: <mensagem>``. Sendo:
- ``<tipo>``: a tipificação do commit, podendo ser relacionado:
    - `post`: ao conteúdo de um post. Ex.: Adição, correção e exclusão
    - `fix`: a correção de um mau funcionamento do jekyll, estilo ou comportamento. Ex.: Correção
    - `feat`: a estrutura perceptível do blog com jekyll, estilização e comportamento. Ex.: Adição, modificação e exclusão
    - `improve`: a estrutura não perceptível mas relacionada diretamente ao blog, como criação de funções javascript.
    - `refactor`: a refatoração do código do relacionado diretamente ao blog. Ex.: Adição, modificação e exclusão
    - `style`: estilização do código relacionado diretamente ao blog. Ex.: Correção de identação, modificação de fechamento de tag e etc.
    - `docs`: a modificações em documentações, como templates do github, readme e etc
    - `chore`: relacionado a todo escopo fora da atividade fim (blog), como o deploy ou gerenciamento de dependências
- ``<escopo>``: obrigatório somente para especificar somente o assunto do `tipo` post. Ex.: post(dwm)
- ``<mensagem>``: frase explicando no que o commit afeta a cronologia do projeto. Possui algumas regras de escrita, sendo:
    1. Começar com um verbo no imperativo. Ex.: adiciona (ou add), modifica, remove, ignora e etc
    2. Não iniciar com letra maiúscula e não encerrar com ponto final

Regras adaptadas do [guideline do angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) e do site [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).

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
* [x] Botão dark/light mode salvando preferência no cache do navegador
* [ ] Botão para aumentar, diminuir a fonte do texto
* [ ] Abstrair tema
