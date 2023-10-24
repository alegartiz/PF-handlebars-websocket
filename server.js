const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// config del socket.io
io.on('connection', (socket) => {
    console.log('Usuario conectado');
});

// routes
app.get('/', (req, res) => {
    res.render('home', { products: productList });
});

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { products: productList });
});

// start server 
http.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
