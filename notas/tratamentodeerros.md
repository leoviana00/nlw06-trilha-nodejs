## Tratamento de exceção

> throw new 

- Quando temos o `throw new `, queremos dizer que estamos lançando uma exceção. 

- `Lançar uma exceção:` o que acontece ná prática?

> Fluxo

```
- server -> routes -> controller -> `services (throw new Error)`
```

- Quando uma exceção é lançada, quer dizer que ela está sendo repassada para camada acima, que como podemos ver no fluxo acima, é o `controller. Passando a responsabilidade do tratamento dessa exceção para a mesma.

> A tratativa pode ser feito de duas formas:

- Tratativa na camada controller - `try catch` - sintaxe:

```console
try {
    
}catch(err){

}
```

- Voltando duas camadas, tratativa na camada server, sendo um midleware das rotas

> Middlewares

- Tratativa na camada server - `` - sintaxe:

- Interceptadores que temos dentro de uma requisição, onde podemos tanto interromper uma requisição por completo como podemos adicionar alguma informação. Então quando a requisição é chamada, podemos ter dentro de seu fluxo algum middleware sendo executado, algo se posisionando entre a requisição e a resposta.

```console
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})
```

- Por padrão a biblioteca do express não consegue capturar os erros que estão vindo, não tem suporte para erros assíncronos, devido a isso é necessário a intalação de uma outra biblioteca.


```
$ yarn add express-async-errors
```

- Impot no server
```
import "express-async-errors";
```