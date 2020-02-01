const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');
//odwolujac sie do metody set instancji naszej aplikacji
//podaje siezke do katalogu w ktorym przechowywane beda widoki
//aby podac w tym miejscu odpowiednia sciezk epotrzebuje modulu path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//aby wczytywac pliki statyczne tjobrazki, fonty, pliki css musze wskazac katalog publiczny
//w ktorym znajda sie te pliki
//zwykle jest to katalog public
app.set(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(flash());

//chce aby zdefiniowany przez nas router obslugiwal wszystkie zapytania zaczynajace sie od slasha
app.use('/', routes);
module.exports = app;
