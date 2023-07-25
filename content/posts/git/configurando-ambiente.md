---
title: "Configurando ambiente"
summary: "Nome, email e SSH do Git"
date: 2020-07-29T10:32:31-03:00
toc: true
tags: ["git"]
draft: false
---

As configurações mínimas necessárias são:

1. ``git config --global user.name "Seu Nome Aqui"``
1. ``git config --global user.email "seuemail@mail.com"``
1. ``git config --global color.ui true``
1. ``git config --global core.editor "seu editor de texto favorito"``

---

## SSH

> [Instruções originais](https://gist.github.com/nenitf/433e85b49acc802479654c75535eea2c)

1. Instalar gerador de ssh
    - ubuntu: ``sudo apt install openssh-client``
2. Gerar chave ``ssh-keygen -t rsa -C "my@email.com"``
    - Pode dar enter em todas opções
3. Ver chave pública (`.ssh/id_rsa.pub`) e colocar no github
    ```sh
    cat $HOME/.ssh/id_rsa.pub
    ```
4. Permitir uso da ssh pelo github/gitlab ``ssh -T git@github.com``
    - Responder `yes` se questionado

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

## GPG

Para tornar os commits verificados no Github:

1. Gere a chave

```sh
gpg --full-generate-key
```

2. Escolha `RSA` e `0` para não expirar, informe seu nome e e-mail, configure senha (pode ser em branco) e confirme

3. Liste as chaves

```sh
gpg --list-secret-keys --keyid-format=long
```

4. Pegue o id da chave que está em `sec   rsa4096/IDDACHAVE 2022-08-03 [SC]`
5. Exiba a chave

```sh
gpg --armor --export IDDACHAVE
```

6. Copie **todo** conteúdo, incuindo `-----BEGIN PGP PUBLIC KEY BLOCK-----` até `-----END PGP PUBLIC KEY BLOCK-----` e salve no Github (`Settings > GPG > New GPG key`)
7. Atualize o git

```sh
git config --global --unset gpg.format
git config --global user.signingkey IDDACHAVE
git config --global commit.gpgsign true
```
