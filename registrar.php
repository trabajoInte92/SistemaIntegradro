<?php
$nomUsu = isset($_POST['MainContent_txtNombreUsuario']) ? $_POST['MainContent_txtNombreUsuario'] : '';
$contUsu = isset($_POST['MainContent_txtPassword']) ? $_POST['MainContent_txtPassword'] : '';

try{

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=sisint_db','root', '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    //echo json_encode('Conectado correctamente');
    
    $pdo = $conexion->prepare('INSERT INTO ususisint(nomUsu, contUsu) VALUES(?,?)');
    $pdo->bindParam(1, $nomUsu);
    $pdo->bindParam(2, $contUsu);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');


} catch (PDOException $error){
    echo $error->getMessage();
    die();
}