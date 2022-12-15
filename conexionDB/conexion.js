var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");
 
app.use(express.json());
app.use(cors());
 
var conexion = mysql.createConnection({
   host: "52.20.202.32",
   user: "michael",
   password: "michael",
   database: "contactos",
 });
 conexion.connect(function (error) {
   if (error) {
     throw error;
   } else {
     console.log("Conexión exitosa");
   }
 });
 
 const puerto = process.env.PUERTO || 3001;
 
app.listen(puerto, function () {
 console.log("Servidor funcionando en puerto: " + puerto);
});
app.post("/api/contactanos", (req, res) => {
 let data = {
     nomcon: req.body.NOMCON,
     corrcon: req.body.CORRCON,
     celcon: req.body.CELCON,
     asaucon: req.body.ASAUCON,
     descon: req.body.DESCON
 };
 let sql = "INSERT INTO contactanos SET ?";
 conexion.query(sql, data, function (error, results) {
   if (error) {
     throw error;
   } else {
     console.log(data);
     res.send(data);
   }
 });
 });
