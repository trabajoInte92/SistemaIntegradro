window.addEventListener('load', cargado);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':bdSisIntegrado:');


db.open('bdSisIntegrado.db')
  .then(() => {
    console.log('SQLite connected');
  })
  .catch(e => {
    console.log('Cannot connect to SQLite');
    console.log(e);
  });

  function cargado(){
    document.getElementById('MainContent_SubmitBtn1').addEventListener('click', salvar);
}

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
    
   
}

  
   
    
  