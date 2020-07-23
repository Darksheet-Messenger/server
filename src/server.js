const express = require("express");
const app = express();
const ip = "192.168.1.66";

app.use(express.static(__dirname + "/public"));

const port = process.env.port || 3000;
app.get("/teste", (request, response) => response.sendFile("index.html"));
app.listen(port, () => console.log("Servidor rodando na porta "+port));