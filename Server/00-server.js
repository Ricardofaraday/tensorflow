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

app.listen(4210);
console.log("Servidor inicializado en el puerto 4210");
