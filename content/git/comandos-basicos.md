---
title: "Comandos básicos"
draft: false
---

Esse artigo são anotações sobre meu aprendizado de git, espero que seja útil para outras pessoas.

Git um Sistema de Controle de Versão Distribuído (DVCS). Ele registra mudanças feitas em um ou mais arquivos ao longo do tempo de forma que você possa recuperar versões específicas.
Na prática, é um programa - normalmente utilizado pelo terminal - que registra modificações nos arquivos. Cada "estado" do arquivo é salvo através de *commits*, cujo possuem *hashes* (identificadores únicos) e mensagens.

```
🚧 Post em desenvolvimento 🚧
```

## Configurando ambiente
Siga as [instruções](https://git-scm.com/downloads) oficiais do git. Caso utilize Windows, use o programa git bash instalado para os comandos desse post.

## Estados de arquivos
Um arquivo no git podem estar em 1 dos 4 estágios:
* `untracked`: não versionado no commit anterior;
* `not staged`: sofreu mudanças desde o ultimo commit e ainda não foi selecionado para o próximo commit;
* `staged`: sofreu mudanças e foi selecionado para o próximo commit;
* `commited`: não foram modificados desde o ultimo commit;

## Comandos

Vou falar neste tópico sobre os comandos do git via terminal. Para usar no Windows basta ir até pasta do seu projeto, apertar botão direito do mouse e escolher "git bash".
Comandos são compostos de ``git`` mais a especificação dele. Por exemplo, para transformar um arquivo de `not staged` para `staged`, basta usar ``git add <arquivo>``.
Muitos comandos terão parâmetros, como por exemplo o nome de um arquivo. Nessas situações será usada a notação ``<valor>``. Em caso de duvida, digite o comando completo com help no final como ``git add --help``.
Antes de começar a testar os comandos do git é obrigatório um mínimo de configurações que são feitas através da linha de comando.
1. ``git config --global user.name "Seu Nome Aqui"``
1. ``git config --global user.email "seuemail@mail.com"``
1. ``git config --global color.ui true``
1. ``git config --global core.editor "seu editor de texto favorito"``

---

### init

- Estrutura: ``git init``
- Descrição: Todas mudanças realizadas versionadas com o git ficam na pasta `.git` na raiz do projeto. Para ter esse diretório - e consequentemente utilizar o git - das duas uma, ou clona um objeto (baixa um existente) com ``git clone <endereco>`` ou inicializa o git na pasta com ``init``
- Flags:
    - ``git init --bare`` inicia servidor remote

### clone

- Estrutura: ``git clone <url ou path>``
- Descrição: Copia e cola projeto de acordo com a url
- Flags:
    - ``git clone --single-branch --branch <branch> <url>`` clona somente uma branch
- Observações: 
    - ``git clone <url ou path> <diretorio>`` cria projeto com nome de pasta diferente do original

---

### status

- Estrutura: ``git status``
- Descrição: Verifica a situação dos arquivos do projeto deve-se utilizar.

---

### add

- Estrutura: ``git add <file> <file> ...``
    - ``<file>`` é um arquivo ou diretório, caso seja usado `.` adiciona tudo do atual diretório
- Descrição: Somente arquivos *staged* podem ser *commitados*, e para isso é preciso escolher *untrackeds* ou *not stageds*. Com ``add`` é feita a troca de estado para *staged*.
- Flags:
    - ``git add -A`` adiciona todos arquivos
- Observações:
    - ``git reset <file>`` troca de *staged* para *untracked* ou *not staged*

---

### commit

- Estrutura: ``git commit``
- Descrição: O *commit* é o responsável por gravar as alterações dos arquivos stageados no projeto. É pelo histórico de *commits* que é possível retroceder até determinada versão do projeto. Os principais características que todo *commit* possui é seu *hash* (identificador), data, autor e mensagem. Com o comando é aberto um editor de texto para escrever a mensagem.
- Flags:
    - ``git commit -m "<mensagem>"`` cria *commit* sem abrir o editor de texto
- Observações:
    - Dicas para uma mensagem de *commit*:
        - Ser clara para tornar fácil o entendimento do histórico do projeto.
        - Possuir um título descritivo de até 50 caracteres. Se necessário especificar mais, deve-se pular uma linha e descrever parágrafos de até 70 caracteres (caso prefira listar tópicos, utilize hifens).
        - Utilizar verbos no imperativo sobre o que aquele *commit* afeta no código. Exemplo: ao invés de escrever "Eu adicionei teste X" ou "Adicionando teste X", use "Adiciona teste X".
        - Vale ressaltar que podem existir convenções para mensagens de *commits*. Uma famosa é do site [conventionalcommits.org](http://conventionalcommits.org), cujo foi adaptada para o framework [angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md).

---

### remote

- Estrutura: ``git remote <comando>``
    - ``<comando>`` comandos relacionados ao *remote*
        - ``git remote add <nome remoto> <url>`` adiciona ``<nome remoto>``, sendo normalmente *origin* ou *upstream*
- Descrição: O [Github](http://github.com) hospeda projetos git online. Quando um projeto possui seu código salvo como no Github, ele possui um *remote*. Ao criar um projeto o git não sabe identificar aonde ele será "guardado". Um projeto pode ter inúmeros *remotes* e comumente o seu principal é chamado de *origin* e o original de um fork *upstream*.
- Flags:
    - ``git remote -v`` exibe nomes dos *remotes* e suas *urls*

---

### push

- Estrutura: ``git push <remote> <branch>``
    - `<remoto>` nome do *remote*, normalmente *origin* ou *upstream*
    - `<branch>` *branch* do *remote*
- Descrição: Envia o código juntamente com seu histórico para o *remote*.

---

<!--### tag-->

### log

- Estrutura: ``git log``
- Descrição: Lista os *commits*, podendo ser usado abaixo:
- Flags:
    - ``git log --pretty=oneline`` exibe cada *commit* em uma linha

---

### merge

- Estrutura: ``git merge <branch nova>``
- Descrição: Mescla duas *branches*. Caso nenhum *commit* tenha sido criado na *branch* de origem durante os *commits* da nova *branch*, o git vai juntar todos os *commits* diretamente (sem um novo *commit* com separação e referência da *branch*). Essa situação é uma funcionalidade do git chamada *fast-forward*.
- Flags:
    - ``git merge <branch> --no-ff`` junta *branch* atual com `<branch>` sem a opção de *fast-forward*

> [Prós e contras](https://nvie.com/posts/a-successful-git-branching-model/#incorporating-a-finished-feature-on-develop) de *fast-forward* pelo criador do *gitflow*

---

<!--### rebase-->

### checkout

- Estrutura: ``git checkout <referência>``
    - ``<referência>`` *branch*, *hash* do *commit* ou arquivo/folder precedido de ``--``
- Descrição:
    - Troca de *branch*
    - Acessa *commit* (transformando-o em uma branch temporária -ideal para inspecionar estado do projeto naquele ponto).
    - Descarta modificações de um arquivo não *commitado*
    - se `<referência>` for usada como ``git checkout <remote-branch>:<new-branch>`` é possível criar branch local a partir do *remote* (veja [fetch](#fetch) para obter *branches* remotas). 
- Flags:
    - ``git checkout -b <nova branch>`` cria ``<nova branch>`` e troca para a esta.
    - ``git checkout -- <arquivo ou folder>`` desfaz modificações não *commitadas* do arquivo/folder. Igual ao ``git restore <arquivo ou folder>``. Para o folder atual, tanto `checkout --` quanto `restore`, se for usado `.` é escolhido o diretório atual.

---

### reset

- Estrutura: ``git reset <referência>``
    - ``<referência>`` *hash* do *commit*, a posição relativa ao HEAD (sendo um anterior `HEAD~1`, dois `HEAD~2` e etc) ou um arquivo para remover da [área de staged](#add).
- Descrição: Retorna o histórico ou altera a área de *staged*. Todos arquivos dos *commits* apagados permanecem (como *modified* ou *untracked*).
- Flags:
    - ``git reset --hard HEAD~1`` desfaz todas alterações dos arquivos, não deixando *modifieds* ou *untrackeds*

---

### bisect

- Estrutura: ``git bisect <comando>``
    - ``<comando>`` comandos relacionados ao *bisect*
        - ``git bisect start`` inicia a procura pelo *commit*
        - ``git bisect bad`` especifica que o *commit* atual é ruim
        - ``git bisect good <hash-commit>`` especifica o *commit* bom, para o git procurar entre as duas especificações o responsável
        - ``git bisect reset`` encerra o monitoramento
- Descrição: Encontra o *commit* que adicionaram código com bug, substitui o uso do ``git checkout <hash-commit>`` por agilizar o processo de troca de *commit*. Funciona como uma sequencia interativa de troca de comunicação entre o algoritmo do git e o comportamento que está sendo analisado. ~~é quase um quente ou frio~~
- Fluxo:
    1. ``git bisect start`` inicia a procura pelo *commit*
    2. ``git bisect bad`` especifica que o *commit* atual é ruim
    3. ``git bisect good <hash-commit>`` especifica o *commit* bom, para o git procurar entre as duas especificações o responsável
        - caso não saiba o *commit* bom, faça ``git checkout <hash-commit>`` até encontrá-lo, e quando achar use ``git bisect good``
    4. o git vai te trocar de *commit* a cada ``git bisect good`` ou ``git bisect bad`` até sobrar 1, portanto cabe a você monitorar
    5. no *commit* que o git constatar ser o culpado será exibido em tela como "o primeiro commit ruim"
    6. ``git bisect reset`` para encerrar o monitoramento
    > com ``git log`` é possível saber em que *commit* está para aprovar ou não (é a HEAD)

---

<!-- ### Branch -->

### fetch

- Estrutura: ``git fetch``
- Descrição: Atualiza as referências das *branches* dos *remotes*
- Observações:
    - ``git fetch <remote> <branch>`` retorna as referências especificas de uma *branch* de um *remote*
        - Após trazer a referência é possível ir para essa branch com ``git checkout <branch>``

### pull

- Estrutura: ``git pull <remoto> <branch>``
    - `<remoto>` nome do *remote*, normalmente *origin* ou *upstream*
    - `<branch>` branch do ``<remoto>``
- Descrição: Atualiza projeto de acordo com a *branch* do *remoto*.

---

### stash

- Estrutura: ``git stash <comando>``
    - `<comando>` comandos relacionados ao *stash*
        - `git stash save` salva modificações
        - `git stash save "mensagem de descrição"` salva modificações com descrição
        - `git stash list` lista *stashes*
        - `git stash show` exibe arquivos modificados do ultimo *stash*
        - `git stash show -p` exibe diffs do ultimo *stash*
        - `git stash clear` limpa área de *stash*
        - `git stash apply` aplica ultimo *stash*
        - `git stash pop` aplica ultimo *stash* e o apaga
    - `<branch>` branch do ``<remoto>``
- Descrição: Salva modificações sem commitá-las.

<!-- Conflitos? -->

---

## Fluxos de trabalho

### Individual

É mais simples versionar o código quando está trabalhando sozinho em um projeto, portanto essa seção abordará o escopo de comandos mínimos necessários para essa situação.
Abaixo uma figura no fluxo de trabalho explicado na seção:

```
+--------+ +---------------+
|git init| |git clone <url>|
+---+----+ +---+-----------+
    |          |
    v          v
+-----------------+                  +--------------------+
|  cria/deleta    |<-----------------+git push origin HEAD|
|modifica arquivos|<--------+        +--------------------+
+-------+---------+         |                  ^
        |                   |                  |
        v                   |                  |
+-----------------+    +----+------------------+------------+
|git add <arquivo>+--->|git commit -m "<mensagem de commit>"|
+-----------------+    +------------------------------------+
```

---

### Gitflow

- [Instruções Gitflow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)
- [Post original Gitflow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Transcrição do cli do gitflow para o git comum](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

<!-- github flow? -->

## Configurações

### SSH

> [Instruções originais](https://gist.github.com/nenitf/433e85b49acc802479654c75535eea2c)

1. Instalar gerador de ssh
    - ubuntu: ``sudo apt install openssh-client``
2. Gerar chave ``ssh-keygen -t rsa -C "my@email.com"``
    - Pode dar enter em todas opções
3. Ver chave pública (`.ssh/id_rsa.pub`) e colocar no github
4. Permitir uso da ssh pelo github/gitlab ``ssh -T git@github.com``
    - Responder yes se questionado

> [Créditos ao Leandro Ramos](https://www.youtube.com/watch?v=tjZEplICR5g)

Caso existam multiplas keys o ideal é configurar no arguivo `~/.ssh/config`.
Exemplo de uma configuração abaixo:

```
Host github.com-oab
  Hostname ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa
 
Host github.com
  Hostname ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa_nenitf
  
 Host gitlab.com
  Hostname altssh.gitlab.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa-gitlab
```

### Projeto

#### Gitignore

Para fazer o git ignorar arquivo (normalmente de configuração de IDE, logs e etc) é criado na raiz do projeto o arquivo `.gitignore`.

## Ferramentas

### Extensões de editores/IDEs

- Vim:
    - [fugitive](https://github.com/tpope/vim-fugitive): integração de comandos do git
    - [gitgutter](https://github.com/airblade/vim-gitgutter): `+`, `-` e `~` no editor
    - [gv](https://github.com/junegunn/gv.vim): exibição do historico de commits
- VSCode:
    - Integração própria
    - Git blame
    - Git lens
