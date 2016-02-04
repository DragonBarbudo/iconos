<?php
require 'rb.php';
require 'setup.php';



if( isset($_GET['all']) ){
$beans = R::findAll('noticias');
$array = R::exportAll($beans);
echo json_encode($array);



}else if( isset($_GET['update']) && isset($_GET['id']) ){

  $idu = $_GET['id'];
  $prg = R::load('noticias', $idu);
  $prg->timestamp = date('c');
  $id = R::store($prg);
  echo 'Update: '.$id;

} else if(isset($_GET['id'])){
  $idu = $_GET['id'];
  $bean = R::load('noticias', $idu);
  if($bean){
    $array = $bean->export();
    echo json_encode($array);
  }

} else if(isset($_GET['add'])){

$prg = R::dispense('noticias');
$prg->titulo = 'Laboratorio de Experimentación en Mapping Performance';
$prg->tipo = 'c';
$prg->descripcion= 'Genera proyectos audiovisuales para su proyección sobre superficies volumétricas.';
$prg->texto1 = 'Conceptualiza audio y video como un solo lenguaje, para la producción de audiovisuales y su proyección en múltiples plataformas.';
$prg->texto2 = 'Aprende a digitalizar objetos y escenarios';


$id = R::store($prg);
echo 'Create: '.$id;

}
 ?>
