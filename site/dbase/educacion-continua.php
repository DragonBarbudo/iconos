<?php
require 'rb.php';
require 'setup.php';

$beanName = 'educacioncontinua';



if( isset($_GET['all']) ){
$beans = R::findAll($beanName);
$array = R::exportAll($beans);
echo json_encode($array);



} else if( isset($_GET['update']) && isset($_GET['id']) ){

  $idu = $_GET['id'];
  $prg = R::load($beanName, $idu);
  $prg->timestamp = date('c');
  $id = R::store($prg);
  echo 'Update: '.$id;

} else if(isset($_GET['id'])){
  $idu = $_GET['id'];
  $bean = R::load($beanName, $idu);
  if($bean){
    $array = $bean->export();
    echo json_encode($array);
  }

} else if(isset($_GET['add'])){

$prg = R::dispense($beanName);


$id = R::store($prg);
echo 'Create: '.$id;

}
 ?>
