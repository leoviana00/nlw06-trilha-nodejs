## Criando a Estrutura de Tags

1. Criando `migration` tags
```
$ yarn typeorm migration:create -n CreateTags
```

2. Criar a `tabela`

- Rodando a `migration tags
```
$ yarn typeorm migration:run
```

3. Criar `entidade` tag

```bash
$ yarn typeorm entity:create -n User
```

4. Criar o `Repositório` tags

5. Criar o `Service` tags
- Regras

    [x] Não é permitido cadastrar mais de uma tag com o mesmo nome;

    [x] Não é permitido cadastrar tag sem nome;

6. Criar o `controller` tags

7. Criar a `rota` tags