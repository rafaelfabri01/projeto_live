var express = require('express');
var app = express();
var axios = require("axios").default;

app.set('view-engine', 'ejs');
app.listen(8080);





app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/comentario', (req, res) => {
    res.render('comentario.ejs');
})

axios.post("http://138.68.7.94:85/busca_comentarios").then(function(resposta){
    console.log(resposta.data);
})
