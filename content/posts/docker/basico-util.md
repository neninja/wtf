---
title: "Utilização básica do Docker com docker-compose"
summary: "Fluxo de utilização comum em projetos pessoais com Docker"
date: 2021-07-19T10:00:00-03:00
tags: ["docker"]
draft: false
---

<!--
## Instalação

### Linux

### Windows

### Dicas
- Limpar imagens, containers antigos

### Exemplos com react
-->

## Comandos

Utilizando [Docker Compose](https://docs.docker.com/compose/install/), dentro do projeto com o arquivo `docker-compose.yml` criado:

- ``docker-compose up -d`` Cria os containers sem travar o terminal
  - ``docker-compose up -d --build`` Cria os containers mas rebuildando as imagens. Útil quando o `Dockerfile` foi modificado e deve ser relido.
- ``docker-compose down`` Para e apaga todos containers criados
- ``docker-compose exec <service-name> <comando> <param1> <param2>...`` Executa um comando dentro do container, usos mais comuns:
  - ``docker-compose exec app composer install`` Instala as dependências do composer
  - ``docker-compose exec app composer test`` Executa script `test` do composer
  - ``docker-compose exec app bash`` Acessa "terminal" do container do *service* `app`

## `docker-compose.yml`

É uma "receita" para criar containers (especificando ordem e dependência) configurando instruções adicionais antes das criações das imagens

### Glossário

- `version` Compatibilidade do Docker Compose
- `services` Serviços (containers) que serão criados
  - Evite usar `container_name`, pois com o Docker Compose, dentro do projeto, podemos executar comandos pelo nome do serviço como: ``docker-compose exec <service-name> <command>``
- `build` Usado ao invés de `image`, especifica local onde está o `Dockerfile` existente. Se estiver na mesma pasta que o `docker-compose.yml` utilize `.`
- `image` Usado ao invés de `build`, especifica [imagem](https://hub.docker.com/), igual ao `FROM` do `Dockerfile`
- `volumes` Lista de volumes que serão espelhados da sua "máquina" (`HOST`) para o container
  - Exemplo: para `.:/var/www/html` significa que o projeto da pasta do `docker-compose.yml` é refletido em `/var/www/html`, onde que cada arquivo adicional criado/modificado em um é replicado em outro
- `ports` Lista de espelhamentos de portas de um container em outro
  - Exemplo: para `8081:80` requisições na porta `8081` da máquina local (`HOST`) são direcionadas para a porta `80` de dentro do container
- `command` Comando que será executado ao iniciar o container. Normalmente usado para iniciar o servidor
- `environment` Variáveis de ambiente para serem utilizadas na imagem e/ou container. Sua utilização varia muito de imagem para imagem
- `working_dir` Diretório padrão do container. Quando for acessado é nessa pasta que iremos, o comum é deixar no espelhamento do volume

### Exemplos

```yml
version: "3.3"

services:
  app:
    build: docker/centos
    volumes:
      - .:/var/www/html
    working_dir: /var/www/html
    ports:
      - '8081:80'
    command: /usr/sbin/httpd -DFOREGROUND
```

```yml
version: "3.3"

services:
  db:
    restart: always
    image: postgres
    environment:
      POSTGRES_DB: dbname
      POSTGRES_USER: dbuser
      POSTGRES_PASSWORD: dbpwd
    ports:
      - "5432:5432"
    volumes:
      - ./docker/psql/init.sql:/docker-entrypoint-initdb.d/init.sql

  app:
    build: docker/php
    volumes:
      - .:/var/www/html
    working_dir: /var/www/html
    links:
      - db:db
    ports:
      - '8080:80'
    depends_on:
      - db
```

```yml
version: "3"

services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD:?err}
      MYSQL_DATABASE: ${MYSQL_DATABASE:?err}
      MYSQL_USER: ${MYSQL_USER:?err}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD:?err}
    volumes:
      - ./.docker/mysql-data:/var/lib/mysql

  app:
    build: .docker/php
    ports:
      - 9000:9000
    volumes:
      - .:/var/www/html
    working_dir: /var/www/html
    depends_on:
      - db
    links:
      - db:db

  nginx:
    image: nginx:stable-alpine
    ports:
      - ${APP_PORT-8080}:80
    volumes:
      - .:/var/www/html
      - ./.docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
    working_dir: /var/www/html
    depends_on:
      - app


#default.conf
#server {
#    listen 80;
#    index index.php;
#    server_name localhost;
#    root /var/www/html/public;
#    error_log /var/log/nginx/project_error.log;
#    access_log /var/log/nginx/project_access.log;
#
#    location / {
#        # try to serve file directly, fallback to index.php
#        try_files $uri /index.php$is_args$args;
#    }
#
#    location ~ ^/index\.php(/|$) {
#
#        # Sets the address of a FastCGI server. The address can be specified as a domain name or IP address, and a port
#        # fastcgi_pass php:9000;
#        fastcgi_pass app:9000;
#        fastcgi_split_path_info ^(.+\.php)(/.*)$;
#        include fastcgi_params;
#        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
#        fastcgi_param DOCUMENT_ROOT $realpath_root;
#
#        # Avoid upstream sent too big header while reading error
#        # https://stackoverflow.com/questions/17708152/nginx-overwrites-general-symfony-errors-with-502-bad-gateway
#        fastcgi_buffer_size 128k;
#        fastcgi_buffers 4 256k;
#        fastcgi_busy_buffers_size 256k;
#
#        # Prevents URIs that include the front controller. This will 404:
#        # http://domain.tld/index.php/some-path
#        # Remove the internal directive to allow URIs like this
#        internal;
#    }
#
#    # return 404 for all other php files not matching the front controller
#    # this prevents access to other php files you don't want to be accessible.
#    location ~ \.php$ {
#        return 404;
#    }
#}
```

## `Dockerfile`

É uma "receita" para criar uma imagem e, a partir da dessa, criar um container. Deve iniciar de uma imagem existente (`FROM`) e depois customizá-la.

### Glossário

[Especificação das instruções](https://docs.docker.com/engine/reference/builder/)

- `FROM` [Imagem](https://hub.docker.com/) que vai ser usada como ponto de partida
- `ENV` Variável de ambiente que pode ser utilizada em scripts, instruções ou configurações de ambiente
- `RUN` Comando que vai ser executado no "terminal". Novas linhas devem utilizar `\` e comandos diferentes devem ser usados com `&&` para serem executados na mesma instrução de `RUN`
  - Evite utilizar mútiplos `RUN`, o ideal é aglutinar em uma mesma instrução o máximo possível
  - Lembre de atualizar os pacotes na primeira instrução `RUN`
- `ADD` Copia arquivos, diretórios ou remotos para um local

### Exemplos

```Dockerfile
FROM centos:centos7

ENV PHALCON_VERSION phalcon-v1.3.4
ENV PATH="/opt/remi/php54/root/bin:${PATH}"

RUN yum -y update && \
    yum -y install \
        gcc \
        make \
        epel-release \
        httpd \
        unzip

ADD https://packages.microsoft.com/config/rhel/7/prod.repo /etc/yum.repos.d/mssql-release.repo

RUN yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm && \
        yum-config-manager --enable remi-php54 && \
        ACCEPT_EULA=Y yum -y install \
        php54-php \
        php54-php-common \
        php54-php-devel \
        php54-php-mysqlnd \
        php54-php-mbstring \
        php54-php-soap \
        php54-php-gd \
        php54-php-ldap \
        php54-php-pdo \
        php54-php-intl \
        php54-php-xml \
        php54-php-sqlsrv \
        php54-php-pear && \
        yum clean all;

ADD https://github.com/phalcon/cphalcon/archive/$PHALCON_VERSION.tar.gz ./phalcon.tar.gz

RUN rm -rf /var/cache/yum && \
        tar -xzf {PWD}/phalcon.tar.gz && \
        cd cphalcon-$PHALCON_VERSION/build && \
        ./install && \
        rm -rf /phalcon && \
        echo 'extension=phalcon.so' \
        | tee /opt/remi/php54/root/etc/php.d/30-phalcon.ini;

RUN curl -sS https://getcomposer.org/installer \
        | php -- --install-dir=/usr/local/bin --filename=composer;
```

```Dockerfile
FROM php:7.4-apache

RUN a2enmod rewrite

RUN cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini

# THANKS: https://github.com/docker-library/php/issues/221#issuecomment-601129850
RUN apt-get update; \
    apt-get install -y libpq5 libpq-dev libzip-dev zip; \
    docker-php-ext-install pdo pdo_pgsql zip; \
    apt-get autoremove --purge -y libpq-dev; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN curl -sS https://getcomposer.org/installer \
        | php -- --install-dir=/usr/local/bin --filename=composer;
```

```Dockerfile
FROM php:8.0-fpm

RUN apt-get update; \
    apt-get install -y libpq5 libpq-dev libzip-dev zip; \
    pecl install xdebug; \
    docker-php-ext-install pdo pdo_mysql zip sysvsem; \
    docker-php-ext-enable xdebug; \
    echo "xdebug.mode=coverage" >> /usr/local/etc/php/conf.d/xdebug.ini; \
    apt-get autoremove --purge -y libpq-dev; \
    apt-get clean ; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony
```
