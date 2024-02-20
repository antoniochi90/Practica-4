<?php

//Archivo de ejecución de la API REST 
require "controlador.php";
require "funciones.php";

$mainController = new clsMainController();
$mainController->funProcessRequest();
?>