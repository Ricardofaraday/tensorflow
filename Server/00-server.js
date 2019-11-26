// var express = require("express");
// var app = express();
//
//
// app.use(express.static('Public'));
// // app.use("/static", express.static(__dirname + '/Public'));
//
// app.get("/", (request, response) => {
// 	console.log("01-Se acaba de recibir una peticion");
// 	response.send("Hello world");
// });
//
// app.listen(8787);
//
// console.log("00-El servidor ha sido inicializado...");
//

let express = require("express");
let app = express();

app.use(express.static("public"));
app.get("/", (request, response) => {
	console.log("Solicitur recibida");
});
const PORT = 4210
app.listen(PORT);
console.log(`Servidor inicializado en el puerto ${PORT}`);
