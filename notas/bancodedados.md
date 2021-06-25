## Configurando o Banco de dados

- Instalando dependências

```bash
$ yarn add typeorm reflect-metadata sqlite3
```

## Migration

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

- Alterando user com migration 

```
$ yarn typeorm migration:create -n AlterUserAddPassword
```
```
$ yarn typeorm migration:run
```

## Entidade

- Criando entidade

```bash
yarn typeorm entity:create -n User
```

> Descomentar no `tsconfig.json`

  -  "experimentalDecorators": true,              
  -  "emitDecoratorMetadata": true,               
  -  "strictPropertyInitialization": false,

## Beekeeper

- Entidades criadas

![](images/beekeeper.png)

- Elogios cadastrados

![](images/elogios-cadastrados.png)






