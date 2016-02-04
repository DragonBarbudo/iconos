<?php
require 'rb.php';
require 'setup.php';

if( is('all') ){
  $all = R::inspect();
  echo json_encode($all);
} else if( is('type') ){
  $all = R::inspect($_GET['type']);
  echo json_encode($all);
} else if( is('add') ){

  $formVals = json_decode( $_GET['formulario'], true);
  //echo var_dump( $formVals );
  $bean = R::dispense($_GET['add']);
  foreach($formVals as $key => $val){
    $bean[$key] = $val;
  }
  $id = R::store($bean);
  echo 'Created: '.$id;
}









function is($field){
  if( isset($_GET[$field]) ){
    return true;
  }
}

 ?>
