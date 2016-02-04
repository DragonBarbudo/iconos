<?php
require 'rb.php';
require 'setup.php';



if( isset($_GET['all']) ){
$beans = R::findAll('docente');
$array = R::exportAll($beans);
echo json_encode($array);



} else if( isset($_GET['update']) && isset($_GET['id']) ){

  $idu = $_GET['id'];
  $prg = R::load('docente', $idu);
  $prg->timestamp = date('c');
  $id = R::store($prg);
  echo 'Update: '.$id;

} else if(isset($_GET['id'])){
  $idu = $_GET['id'];
  $bean = R::load('docente', $idu);
  if($bean){
    $array = $bean->export();
    echo json_encode($array);
  }

} else if(isset($_GET['add'])){

$prg = R::dispense('docente');


$id = R::store($prg);
echo 'Create: '.$id;

}
 ?>
