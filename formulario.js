window.addEventListener('load', cargar);
var db = openDatabase("bdSisIntegrado", "1.0", "TiPS Database Example", 2 * 1024 * 1024);

function cargar(){

}

function capturar(){
    var cedPer = document.getElementById("MainContent_txtcedula").value;
    var nombrePer = document.getElementById("MainContent_txtnombre").value;
    var apellidoPer = document.getElementById("MainContent_txtapellido").value;
    var mailPersPer = document.getElementById("MainContent_txtmailp").value;
    var mailinstPer = document.getElementById("MainContent_txtmailu").value;
    var ocuPer = document.getElementById("MainContent_txtocup").value;
    var cellPer = document.getElementById("MainContent_txtcel").value;
    var fecNacPer = document.getElementById("MainContent_txtfn").value;
    var dirPer = document.getElementById("MainContent_dirc").value;

    if(cedPer==""){
        alert("Complete la cédula");
        document.getElementById("MainContent_txtcedula").focus();
    }else{ 
        if(nombrePer==""){
        alert("Complete el nombre");
        document.getElementById("MainContent_txtnombre").focus();
        }else{
            if(apellidoPer==""){
            alert("Complete el apellido");
            document.getElementById("MainContent_txtapellido").focus();
            }else{
                if(mailPersPer==""){
                alert("Complete el mail personal");
                document.getElementById("MainContent_txtmailp").focus();
                }else{
                    if(mailinstPer==""){
                        alert("Complete el mail UTA");
                        document.getElementById("MainContent_txtmailu").focus();
                    }else{
                        if(ocuPer==""){
                            alert("Complete la ocupación");
                            document.getElementById("MainContent_txtocup").focus();
                        }else{
                            if(cellPer==""){
                                alert("Complete el celular");
                                document.getElementById("MainContent_txtcel").focus();
                            }else{
                                if(fecNacPer==""){
                                    alert("Complete la fecha de nacimiento");
                                    document.getElementById("MainContent_txtfn").focus();
                                }else{
                                    if(dirPer==""){
                                        alert("Complete la dirección");
                                        document.getElementById("MainContent_dirc").focus();
                                    }else{
                                        console.log(cedPer +" "+ nombrePer +" "+ apellidoPer +" "+ mailPersPer +" "+ mailinstPer +" "+ ocuPer +" "+ cellPer +" "+ fecNacPer +" "+ dirPer);
                                        document.getElementById("MainContent_txtcedula").value="";
                                        document.getElementById("MainContent_txtnombre").value="";
                                        document.getElementById("MainContent_txtapellido").value="";
                                        document.getElementById("MainContent_txtmailp").value="";
                                        document.getElementById("MainContent_txtmailu").value="";
                                        document.getElementById("MainContent_txtocup").value="";
                                        document.getElementById("MainContent_txtcel").value="";
                                        document.getElementById("MainContent_txtfn").value="";
                                        document.getElementById("MainContent_dirc").value="";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    db.transaction(function(tx){
        tx.executeSql('INSERT INTO PersonaSisInt (cedPer, nombrePer, apellidoPer, mailPersPer, mailinstPer, ocuPer, cellPer, fecNacPer, dirPer)');
    });

}