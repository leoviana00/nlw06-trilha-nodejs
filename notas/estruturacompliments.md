## 1 Migration

1. Criação da tabela `compliments`

```
$ yarn typeorm migration:create -n CreateCompliments
```

- Obs: Criar as `FKs`

2. Rodando a migration

```
$ yarn typeorm migration:run 
```

## 2 Entity

1. Criar `entidade` compliments

```bash
$ yarn typeorm entity:create -n Compliment
```

## 3 Repository

1. Criar `repositório`

## 4 Service

1. Criar o `service`

2. Implementar as `regras` de cadastro de elogios.

## 5 Controller

1. Criar o `controller`

## 5 Route

1. Criar a `rota`