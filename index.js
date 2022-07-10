const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Task = require('./models/Task');


conn
    .sync()
    .then(()=> {
        app.listen(3000);
}).catch((err)=> console.log(err));