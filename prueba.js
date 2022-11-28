//window.addEventListener('load', cargado);


//function insertar(){
    
/*const express = require('express');
//const app = express();
const sqlite3 = require('sqlite3').verbose();
let sql;

const server = express();
let path_html = (__dirname + '/index.html');
let path_db = (__dirname + '/bdSisIntegrado.db')

server.get('/', function(req, res){
    res.sendFile(path_html);
});

server.post('/', function(req, res){
    let valor1 = req.body.MainContent_txtNombreUsuario
    console.log(valor1);
    let valor2 = req.body.MainContent_txtPassword
   let db = new sqlite3.Database(path_db, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('conexion a la BD');
});
db.run('INSERT INTO UsuSisInt (nomUsu, contUsu) VALUES (?,?)',[valor1, valor2], function(err){
    if (err) {
        console.error(err.message);
    }
    console.log('Bien');
});
    db.close();
});

server.listen(8000);*/


// conexion a la base de datos
/*const db = new sqlite3.Database("./bdSisIntegrado.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});


   
 

//function cargado(){
 //document.getElementById('MainContent_SubmitBtn1').addEventListener('click', salvar);
//}

//function salvar(){


    var nombreUsuario = document.getElementById("MainContent_txtNombreUsuario").value;
    var contraseniaUsuario = document.getElementById("MainContent_txtPassword").value;

   if(nombreUsuario==""){
        alert("Ingrese el Usuario");
        document.getElementById("MainContent_txtNombreUsuario").focus();
    }else{ 
        if(contraseniaUsuario==""){
        alert("Ingrese la Contraseña");
        document.getElementById("MainContent_txtPassword").focus();
        }else{
            console.log(nombreUsuario +" "+ contraseniaUsuario);
            document.getElementById("MainContent_txtNombreUsuario").value="";
            document.getElementById("MainContent_txtPassword").value="";
            document.getElementById("MainContent_txtCaptcha").value="";
        }
    }
    
     // insert en la tabla UsuSisInt
 sql = `INSERT INTO UsuSisInt(nomUsu, contUsu) VALUES (?,?)`;
 db.run(sql,
     [nombreUsuario, contraseniaUsuario],(err)=>{
 if (err) return console.error(err.message);
 
 });

//}*/
    


  
   
    
  