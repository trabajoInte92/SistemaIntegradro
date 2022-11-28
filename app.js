document.getElementById('form1').addEventListener('submit', function(e){
    
    e.preventDefault();

    let formulario = new FormData(document.getElementById('form1'));

    fetch('registrar.php',{
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true'){
            document.getElementById('MainContent_txtNombreUsuario').value = '';
            document.getElementById('MainContent_txtPassword').value = '';
            document.getElementById('codver').value = '';

            console.log('El usuario se inserto correctamente');

        }else{
            console.log(data);
        }
    });

});