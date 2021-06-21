import express from "express";

const app = express();

/**
 * GET => Buscar uma informação
 * POST => Inserir uma informação
 * PUT => ALterar uma informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */

//http://localhost:3000

app.get("/teste", (request, response) => {
    //Request => Entrando
    //Response => Saindo

    response.send("Olá, NLW");
})

app.post("/teste-post", (request, response) => {
    response.send("Ola, NLW , Método post");
})

app.listen(3000, () => console.log("Server is running"));