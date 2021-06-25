## Rotas

> Method POST

- localhost:3000/login
- Autenticando um usuário: na autenticação do usuário, um `token` é gerado.

![](../images/user-auth.png)

- Ao realizar a autenticação do usuário, um token é gerado, esse token deve ser passado nas rotas que exigem o token para autenticação como a rota em que se cadastra um `elogio`.
- localhost:3000/compliments

![](../images/token-compliment.png)

- Criando um `elogio`

![](../images/elogio.png)

- Criar um elogio para um usuário que não existe.

![](../images/elogio-user-inexistente.png)

- Criar um elogio para si mesmo

![](../images/elogioparasimesmo.png)

- Assim como para criar um elogio, a criação da tags também deve ter o token passado na requisição.
- Criando uma `tag`
- localhost:3000/tags

![](../images/tags.png)

- Somente um usuário `admin` consegue criar `tags`
- Create `users` não admin
- localhost:3000/users

![](../images/create-user.png)

- Tentando criar `tag` com user que não é `admin`

![](../images/new-tag-user-nao-admin.png)

> Method GET

- Listando `elogios` recebidos
- localhost:3000/users/compliments/receive

![](../images/list-receive-compliments.png)

- Listando `elogios` enviados
- localhost:3000/users/compliments/send

![](../images/list-send-compliments.png)

> Para fazer a listagem das tags e users é necessário o token

- Listando `tags` cadastradas
- localhost:3000/tags

![](../images/tag-list.png)

- Listando `users` cadastrados
- localhost:3000/users

![](../images/user-list.png)