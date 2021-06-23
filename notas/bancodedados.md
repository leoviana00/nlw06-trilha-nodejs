## Configurando o Banco de dados

- Instalando dependências

```bash
$ yarn add typeorm reflect-metadata sqlite3
```

- Criando uma migration
```bash
$ yarn typeorm migration:create -n CreateUsers
```

- Rodando as migrations
```bash
yarn typeorm migration:run
```

- Revertendo a migration
```bash
yarn typeorm migration:revert
```

- Criando entidade

```bash
yarn typeorm entity:create -n User
```

> Descomentar no `tsconfig.json`

  -  "experimentalDecorators": true,              
  -  "emitDecoratorMetadata": true,               
  -  "strictPropertyInitialization": false,

> Instalar biblioteca `uuid`
```bash
$ yarn add uuid
$ yarn add @types/uuid -D
```




