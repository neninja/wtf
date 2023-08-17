---
title: "Subdomínio no Github Pages e Google Domains"
summary: "Projetos hospedados com domínio personalizado"
date: 2021-03-18T10:00:00-03:00
tags: ["deploy", "github"]
draft: false
---

Quando compramos um domínio (`meusite.dev`), podemos criar subdomínios (`portfolio.meusite.dev`, `blog.meusite.dev` e etc). Abaixo o passo a passo para configurar o [Github Pages](https://pages.github.com/) e um subdomínio de um domínio já comprado pelo [Google Domains](https://domains.google/).

1. Crie um processo de build onde o html final é *commitado* na branch `gh-pages`. Garanta que na raiz do projeto dessa *branch* terá o arquivo `CNAME`, cujo contém somente o nome completo do site
2. Configure o projeto na seção `Github Pages` para que a disponibilização do site seja na *branch* `gh-pages`
3. Vá até o google domains, seção DNS e em `Registros de recursos personalizados`. Lá insira um novo valor contento:
  - Subdomínio (caso o site desejado seja `exemplo.meusite.dev`, insira `exemplo`)
  - Tipo `CNAME`
  - Endereço IPV4 o redirecionamento original do github pages (`<SEUUSERNAME>.github.io`).
