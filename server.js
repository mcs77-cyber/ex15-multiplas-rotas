const express = require('express');
const app = express();

// TODO: Implemente as rotas:
// GET /       → 200
// GET /sobre  → 200
// GET /contato → 200
// GET /rota-inexistente → 404
// Rotas não mapeadas → 404 automático do Express

app.get('/',(req,res) => 
    res.send("Home")
)

app.get('/sobre',(req,res) => 
    res.send("Sobre")
)


app.get('/contato',(req,res) => 
    res.send("Contato")
)
app.use((req, res) => {
  res.status(404).send('Oops! Essa pagina é inexistente');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
