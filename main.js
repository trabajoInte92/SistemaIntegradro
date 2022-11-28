window.addEventListener('load', cargado);
var db = openDatabase("bdSisIntegrado.db", "1.0", "Base de Datos ejemplo", 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS UsuarioSis (nomUsu, contUsu)');
    
  });


function cargado(){
    document.getElementById('MainContent_SubmitBtn1').addEventListener('click', salvar);
}

//function conexion(){
    // Load modules
//const sqlite3 = require('sqlite3').verbose();
//const path = require('path');
    // Connect with SQLite database
//const db_path = path.join(__dirname, 'bdSisIntegrado.db', 'To-Do-Application-Database');
//const appDatabase = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, err => {
//  if (err) {
//    console.error('Nose pudo conectar');
//  }
//  console.log('Successful connected to the database');
//});

// Export database object
//module.exports = { appDatabase };
//}

function salvar(){
    
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

    db.transaction(function(tx){
        
        tx.executeSql('INSERT INTO UsuarioSis (nomUsu, contUsu) VALUES(?,?)',[nombreUsuario, contraseniaUsuario]);
        
    });
  

    //var insertar = appDatabase.prepare("INSERT INTO UsuSisInt VALUES (?,?)");
    //insertar.run(nombreUsuario, contraseniaUsuario);
    //insertar.finalize();
    
       
      
}
