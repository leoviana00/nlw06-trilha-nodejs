## Camadas 

```bash
- Server
- Routes - Responsável pelas rotas do projeto.
- Controllers - Acesso ao request e response, pegar a informação do server (rota) e passa ao service.
- Services - Uma camada que isola as regras de negócio das demais camadas.
- Entities - Referência da tabela sendo criada.
- Repository  - Camada responsável por fazer o acesso ao banco, faz a ponte entre as entidades e o banco de dados.
- Banco de dados 
```
## Métodos
```bash
- GET - Buscar uma informação
- POST - Inserir uma informação
- PUT - ALterar uma informação
- DELETE - Remover um dado
- PATCH - Alterar uma informação específica
```
## Tipos de parâmetros
```bash
- Routes Params => http://localhost:3000/produtos/893218309
- Query Params => http://localhost:200/produtos?name=teclado&descriptio=tecladobom 
- Body Params => {
"name":"teclado",
"description":"tecladobom"
}
```

## ORM
- PEGA O OBJETO DENTRO DA CLASSE E TRANSFORMA EM UMA FORMA ONDE O BANCO DE DADOS CONSEGUE ENTENDER, FAZ UMA RELAÇÃO ENTRE O OBJETO E UMA TABALA DO BANCO DE DADOS.