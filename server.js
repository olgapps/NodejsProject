//server configuration

//importuje plik z app.js
const app = require('./app');

//tutaj nie wiem co to znaczy
//powinnam ustawic nasłuchiwanie na konkretnym porcie
//tym razem ustawienia portu z wykorzystaniem zmiennych środowiskowych
//alternatywnie skorzystamy z portu 8080
app.set('port', process.env.PORT || 8080);

//ustawiamy nasłuchiwanie
//pobieram zmienna port
//ustawiam callback ktory zostanie wywoalny w momenice rozpoczecia nasluchiwania
const server = app.listen(app.get('port'), () => {
	console.log(`a node js is listening to ${server.address().port}`);
});
