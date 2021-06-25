## Ambiente de dev a partir de um container

- Executando o container

```console
$ docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:14 bash
```

- Acessando o diretório de trabalho

```console
$ cd /usr/src/app
```

- Criando o projeto com `yarn`

```console
$ yarn init -y
```

> Instalação da dependência e configuração do `typescript`

- Typescript

```console
$ yarn add typescript -D
```

- Inicializando o `typescript`

```console
$ yarn tsc --init
```

- Converter o `typescript` para `javascript`

```console
$ yarn tsc
```

> Instalando o `express`

- Configurando dependência

```console
$ yarn add express
```

- Instalando a biblioteca types do express

```console
$ yarn add @types/express -D
```

> Automatizando o processo de conversão de typescript para javascript

- Instalação da biblioteca responsável pela conversão

```console
$ yarn add ts-node-dev -D
```

- Ajuste do `package.json`

```console
  "scripts" : {
    "dev" : "ts-node-dev src/server.ts"
  }
```

- Rodando o projeto

```bash
$ yarn dev
```

