document.getElementById("MainContent_SubmitBtn1").addEventListener('click', saveFunction);
        function saveFunction(){
            const sqlite3 = require('sqlite3').verbose();
            let db = new sqlite3.Database('./bdSisIntegrado.db');
            let sql;
            var nombreUsuario = document.getElementById("MainContent_txtNombreUsuario").value;
            var contraseniaUsuario = document.getElementById("MainContent_txtPassword").value;
            
            sql = `INSERT INTO UsuSisInt(nomUsu, contUsu) VALUES (?,?)`;
            db.run(sql,
                [nombreUsuario, contraseniaUsuario],(err)=>{
            if (err){ 
                return console.error(err.message);
            }
            console.log('fila insertada');
            });
            db.close();
       
            /*db.run(`INSERT INTO UsuSisInt (nomUsu, contUsu) VALUES (?,?)`, nombreUsuario, contraseniaUsuario), 
            function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`fila insertada`);
            }
            db.close();*/
        
    
           
        }








/*const express = require('express');
const app = express();

app.get('/', async(req, res) =>{
    const db = await dbPromise
    const valor1= req.body.MainContent_txtNombreUsuario
    const valor2= req.body.MainContent_txtPassword
    await db.run('INSERT INTO UsuSisInt (nomUsu, contUsu) VALUES (?,?)', valor1, valor2)
    res.redirect('/')
})
 app.listen(5501, () => {
    console.log('escuchando en localhost:5501')
 }) */