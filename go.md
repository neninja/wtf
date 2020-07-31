# Go
## O que é
Go (ou Golang) é uma linguagem de programação criada pela Google para resolver seus problemas. Desenvolvida por Robert Griesemer, Rob Pike e Ken Thompson em 11/2009.
- Linguagem Compilada
- Fortemente Tipada
- Open source
- Possui Garbage Collector
- Linguagem mínima
- C-like
- Não é OO, porém possui métodos e interfaces
- Concorrência com goroutines

## Configurando o ambiente
Seguir as instruções de [download](https://golang.org/dl).

## Funções e packages
| comando    | descrição                                     |
|------------|-----------------------------------------------|
| build      | compila pacote main                           |
| clean      |                                               |
| doc        | go doc <package> exibe documentação do pacote |
| env        | informações sobre o ambiente de instalação    |
| bug        |                                               |
| fix        |                                               |
| fmt        | formata arquivo .go                           |
| generate   |                                               |
| get        | baixa pacotes                                 |
| install    |                                               |
| test       |                                               |
| list       |                                               |
| run        | compila e executa pacote main                 |
| test       |                                               |
| tool       |                                               |
| version    |                                               |
| vet        | verifica erros no código                      |
| c          |                                               |
| buildmode  |                                               |
| cache      |                                               |
| filetype   |                                               |
| gopath     |                                               |
| enviroment |                                               |
| packages   |                                               |
| importpath |                                               |
| testflag   |                                               |
| testfunc   |                                               |

Dicas:
- ``go`` exibe todas as ferramentas
- ``godoc -http=:6060`` cria servidor com a documentação de pacotes

### Estrutura de um arquivo go
Um arquivo go comumente possui 3 partes:
1. Declaração do pacote
2. Importe de pacotes/bibliotecas
3. Funções

Abaixo um exemplo (considere ``//`` ou ``/* */`` comentários)
```go
// declaração de pacote
package main

// importe de pacotes
import (
    "fmt"
    "os"
)

// funções
func main(){
    // algoritmo
}

func abcde(){
    // algoritmo
}
```

### Funções
Função é um bloco de código nomeado com o algoritmo que pode tanto receber parâmetros quanto retornar valores. Por pasta/pacote não devem haver funções com nome repetido. Go não possui sobrecarga de métodos.

### Packages
Go organiza e reutiliza seu código através de pacotes. Há dois tipos de programa em go: executáveis ou bibliotecas.
- Executáveis não podem ser importados e precisam conter o pacote main
```go
package main

func main(){
    // ...
}
```
- Bibliotecas são arquivos que podem ser reutilizados em qualquer projeto importados. Funções, variáveis e tipos podem ser visíveis caso seu nome comece com a letra naiúscula
```go
package abc

func Blabla(){
    // ...
}
```
```go
package main

import "github.com/nenitf/abc"

func main(){
    abc.Blabla()
}
```

## Documentando
Para documentar pacotes, funções, variáveis e tipos visíveis, basta comentar imediatamente acima da declaração.

```go
package ccord

// GMStoUTM cpnverte coordenada GMS para UTM
func GMStoUTM(){
    // ...
}
```
Dica:
- Pode criar um arquivo doc.go no diretório do seu pacote únicamente para documentá-lo:
```go
/*
Pacote resonsável por
calculos com coordenadas
*/
package ccord
```

## Main packages
Funções mais comuns dos pacotes mais comuns da biblioteca padrão do go.
### fmt
### os
### flag
### http
### log
### strings
## Variáveis e tipos
## Arrays e slices
## Fluxo de controle
## Loops
## Estruturas e interfaces
## Ponteiros
## Concorrência
## Testes
## Benchmark
