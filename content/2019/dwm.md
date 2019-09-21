---
title: "Usando DWM"
author: "Neni"
date: 2019-06-10T19:31:04-03:00
lastmod: 2019-08-16T19:31:04-03:00
tags: [ubuntu,dwm]
draft: false
cover: uzumaki-poco.jpg
coversub: "Uzumaki, VOL: 1 | PÁG: 45"
---

<!--![Example image](/sai.jpg)-->

[DWM](http://dwm.suckless.org/) é um ***tiling*** *window manager*, um tipo de gerenciador de janelas, responsável por dispor as aplicações na tela.

# Como conheci DWM
Quando vi o [vídeo](https://www.youtube.com/watch?v=uD3qSgsQPRg&list=PL-p5XmQHB_JTcMSvPmXMzNe7ZPMxEx_Oz) do youtuber Luke Smith conheci o I3wm (outro gerenciador) e, em seguida, o algoritmo do youtube me recomendou o [vídeo](https://www.youtube.com/watch?v=1tAFXThjzsY) do Derek Taylor. Gostei da proposta desafiadora de tentar não usar mouse - a pouco tempo tinha começado a utilizar vim - e também a diminuição de consumo de memória RAM. Fui experimentando no meu Ubuntu  18.04. Porém, em outro momento, no canal DistroTube encontrei drogas mais pesadas, [DWM](https://www.youtube.com/watch?v=JRRAZrALZpY).
DWM possui a filosofia suckless, tornando seu código fonte o menor possível, normalmente aumentando o desempenho do programa - não vi diferença de tempo de resposta entre o i3wm. Optei ficar com DWM pela simplicidade de configuração.

# Por que DWM?
* Pouco consumo de RAM, ótimo para notebooks mais fracos
* Você no comando, liberdade total de teclas de atalho
* Poucos recursos opcionais, a enfase no DWM é no MVP de um window manager
* Disposição de janelas com o conceito de área master, onde torna prevísivel a visualização de novos aplicativos

# Dmenu
DWM vem com [dmenu](http://tools.suckless.org/dmenu/), que é um lançador de aplicativos. Apertando ``Super+d`` por padrão pode pesquisar e executar, por exemplo, firefox.
![exemplo dmenu](https://i.imgur.com/NIYmyNi.jpg)

# Funcionamento
DWM trabalha com os conceitos de clientes, área master, tags e modos.
* Clientes são as janelas das aplicações abertas, como firefox por exemplo.
* Área master é o local onde novos clientes são enviados (podem ser trocados com ``Super+Enter``), por padrão à esquerda. A cada novo cliente, o antigo é deslocado para a direita, e os que já estão a direita vão para baixo.
![área master](https://i.imgur.com/rmhokq2.png)
* Tags são muito semelhantes a workspaces comuns, onde você como usuário delimita quais aplicações estão abertas. Porém é possível marcar clientes para aparecerem em mais de uma tag simultaneamente - caso queira que o player de musica lhe acompanhe por exemplo.
* Modos são as disposições das janelas, sendo por padrão 3 - Tiling (padrão), float (janelas flutuantes) e mono (uma janela aparece por vez, podendo acessar outras através de ``Super+j`` ou ``Super+k``)

# Meu uso comum
* Abro terminal (``Super+Shift+Enter``) em full screen ou ao lado de uma aplicação
* Pesquiso algum programa com dmenu como o firefox por exemplo
* Pulo de uma janela para outra com ``Super+j`` ou ``Super+k``
* Movo alguma janela para a área master com ``Super+Enter``
* Troco de tag com ``Super+NumeroDaTag``
* Fecho janela com ``Super+Shift+q``
* Desligo o sistema com ``Super+Shift+s``

# Instalação
Para instalar basta paixar o código fonte e compilar com o comando ``sudo make clean install`` e colocar em seu ~/.xinitrc o trecho ``exec dwm``
obs: Dependendo do seu display manager, responsável por iniciar o desktop, talvez seja necessário configurá-lo. Para o lightdm, basta criar um novo arquivo ``dwm.desktop`` como abaixo e colocá-lo em /usr/share/xsession.
```
[Desktop Entry]
Name=DWM
Comment=DWM
Exec=/home/neni/.xinitrc
Type=Application
```
Ao fazer isso, antes de logar pode ser escolhido o perfil DWM.

# Configuração
## Escrevendo no config.h
As configurações mais simples como cores, atalhos, numero e simbolos de tags, bordas de janelas e font padrão é no arquivo config.h. A cada modificação é necessário recompilar o código e reiniciar a sessão.

## Patches
DWM vem com o mínimo necessário, porém existem diversas outras features implementadas por outros programadores que podem ser implementadas. Elas são através de [patches](http://dwm.suckless.org/patches), que são "colagens" de código.
Como funciona:
* Pegar arquivo .diff do patch e analisar a diferença do código fonte do implementado
* Modificar arquivo correspondente apontado na área lida do diff
* Recompilar o código
* Reiniciar sessão

## Personalizando status bar
É possível modificar a barra de status através do comando:
```shell
xsetroot -name "tudo que for colocado aqui | vai atualizar a barra de status"
xsetroot -name "$(echo 'tabém é possivel usar comandos bash')"
```
Um exemplo de script que atualiza sozinho a barra (para o relógio) é:
```shell
online(){
    curl -w %{http_code} --silent -o /dev/null google.com | awk '{if($0=="000") {print "OFFLINE"} else { print "ONLINE"}}'
}

datetime(){
    echo " $(date +%H:%M)"
}

while true; do
    xsetroot -name "$(online) | $(datetime)"
    sleep 5s
done
```
Para inicializar o script automaticamente ao entrar numa sessão, basta colocar no arquivo ~/.xinitrc.
```shell
# mata processo do script se existente
pkill -f ~/dev/scripts/dwm/status.sh

# modifica status
~/dev/scripts/dwm/status.sh&

# inicia dwm
exec dwm
```


# Atualizações desse post
Pretendo atualizar este post com meu tempo de experiência do DWM. Na primeira versão (08/06/2019) possuo por volta de 1 mês de uso com o gerenciador.

# Observações

* [Inspiração do post](https://ratfactor.com/slackware/dwm2/)
* [Wiki do arch](https://wiki.archlinux.org/index.php/Dwm#Statusbar_configuration)
* [Meu repositório do dwm](https://github.com/nenitf/dwm)
