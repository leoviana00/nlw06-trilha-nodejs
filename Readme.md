<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="NLW Together" src="https://img.shields.io/static/v1?label=NLW06&message=Together&color=8257E5&labelColor=000000"  />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-execução">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-notas">Notas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="Preview" src="images/preview.png">
</p>



## 🌱 Projeto

- Nome do projeto: `Nlw Valoriza`
- Descrição: `Projeto no qual pode ser feito e receber elogios dos colegas de trabalho por algo realizado.`
- Educador(a): `Daniele Leão`
- Estrutura do projeto:

1. Cadastro de usuários
2. Cadastro de tags (Somente usuário administrador)
3. Cadastro de elogios ( `ID do usuário`, `ID da tag`, `data da criação`)
4. Autenticação do usuário (Gerar token `JWT`, validar usuário logado nas rotas necessárias)
5. Listagem de usuários
6. Listagem de tags
7. Listagem de elogios por usuário   


## ✨ Tecnologias


- [Nodejs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeOrm](https://typeorm.io/#/)
- [Sqlite](https://www.sqlite.org/)
- [Docker](https://www.docker.com/)
- [JWT](https://jwt.io/)

## 🚀 Execução

- Clone o repositório
- Instale as dependências: `yarn`
- Para criar as tabelas do banco de dados: `yarn typeorm migration:run` 
- Inicie o servidor: `yarn dev`

Aplicação estará disponível em: http://localhost:3000


## 📝 Notas 

| Id | Itens |
| --- |---------- |
| 01 | [Preparação do ambiente](notas/ambiente.md)|
| 02 | [Definições](notas/camadas.md)|
| 03 | [Configuração do banco de dados](notas/bancodedados.md)|
| 04 | [Tratamento de exceções](notas/tratamentodeerros.md)|
| 05 | [Estrutura das Tags](notas/estruturadetags.md)|
| 06 | [Estrutura dos Compliments](notas/estruturacompliments.md)|
| 07 | [Criptografia de senha e geração de token](notas/jwt.md)|
| 08 | [Rotas](notas/rotas.md)|
| 09 | [Regras](notas/regras.md)|
| 10 | [Outros](notas/outros.md)|
| 11 | [Melhorias](notas/melhorias.md)|
|        |        |

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.










