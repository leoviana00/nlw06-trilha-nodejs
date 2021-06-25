## JWT

- Json Web Token

- Token passado entre as requisições para grantir que as rotas que precisam ser autenticadas ou de usuarios admin. Através do JWT conseguimos fazer essa verificação.

## Estrutura

- Dividido em 3 partes, essas 3 partes são divididas por pontos

> Header

- Indentifica qual o tipo do token, por exemplo JWT, qual o algoritmo utilizado para fazer a criptografia dos dados e gerar o token;


> Payload

- São as informações que queremos passar dentro do token.
- Obs: Jamais passar dados sensíveis como senhas no token.

> Verify Signature

- Concatena `parte 1` e `parte 2`,mais chave secreta que deve ser passada para validar ou gerar o token .

## Instalação da biblioteca

```
$ yarn add jsonwebtoken
```

- Tipagem da biblioteca

```
$ yarn add @types/jsonwebtoken -D
```

## Criptografando senhas dos usuários

- Biblioteca `bcryptjs`

```
$ yarn add bcryptjs
```

- Tipagens

```
$ yarn add @types/bcryptjs -D
```

## Tipo de Auth Utilizado

- Bearer