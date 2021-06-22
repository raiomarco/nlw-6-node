import express from 'express';

// @types/express
const app = express();

/**
 * 
 * Verbos http
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação especifica
 */

/**
 * Tipos de Parâmetros
 * 
 * Routes Params => /produtos/123
 * Query Params  => /produtos?name=teclado&description=bom
 * 
 * Body Params   => {
 *  "name": "teclado",
 *  "description": "bom"
 * }
 */

app.get('/test', (req, res) => {
    // req => Entrando
    // res => Saindo
    return res.send("Olá NLW");
});

app.post('/test-post', (req, res) => {
    return res.send("Olá NLW método POST");
})

// http://localhost:3000/
app.listen(3000, () => console.log("Server is running"));
