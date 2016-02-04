<?php
require 'rb.php';
require 'setup.php';



if( isset($_GET['all']) ){
$beans = R::findAll('investigacion');
$array = R::exportAll($beans);
echo json_encode($array);



}else if( isset($_GET['update']) && isset($_GET['id']) ){

  $idu = $_GET['id'];
  $prg = R::load('investigacion', $idu);
  $prg->timestamp = date('c');
  $id = R::store($prg);
  echo 'Update: '.$id;

} else if(isset($_GET['id'])){
  $idu = $_GET['id'];
  $bean = R::load('investigacion', $idu);
  if($bean){
    $array = $bean->export();
    echo json_encode($array);
  }

} else if(isset($_GET['add'])){

$prg = R::dispense('investigacion');
$prg->titulo = 'La percepción del fondo de ojo humano a través de una interfaz háptica virtual informativa e interactiva.';
$prg->autor = 'José Manuel Zavala Alarcón';
$prg->area= 'Licenciatura en Diseño Digital';
$prg->justificacion = '¿Por qué? La tecnología va tomando cada vez más protagonismo en conferencias, demostraciones comerciales, campañas publicitarias, convenciones, eventos sociales y demás oportunidades con gran nivel de interacción pública.

Sumado a esto tenemos que, la industria de la interactividad, la realidad virtual, multimedia, 3D, por mencionar algunos, se enfocan mucho a la publicidad, a productos lúdicos, a las páginas Web. Esta situación crece cada año a un ritmo impresionante, dejando atrás a muchas personas que no se ponen al corriente con tal tecnología.

Pero por otra parte tenemos que los médicos especialistas certificados por el Consejo Mexicano de Oftalmología aún no presentan grandes avances tecnológicos de este tipo de interactivo o los ya mencionados anteriormente. No están aplicados en sus presentaciones, conferencias, diagnósticos, demostraciones, convenciones, etc. Por lo tanto, un médico fuera de la tecnología nos da una premisa de que no es un buen doctor o que está fuera de moda, por esto muchas personas dejan de frecuentarlo para irse con el que tenga la tecnología de punta.

Con lo anterior claro, se tomó la decisión de acercar esta nuevas tecnologías a este medio que aún no ha sido explotado al 100%, a comparación de la Web, videojuegos, videos promocionales, publicidad, etc., aportando a esto todos los conocimientos de diseño digital para poder tener nuevas aplicaciones con esta tecnología y no errar en lo mismo que se está haciendo.

¿Para qué? Por esta razón se pensó en desarrollar y proponer un material tecnológico de apoyo a los médicos especialistas oftalmólogos, para ayudar a un mejor entendimiento del diagnóstico dado a los pacientes. Esto con el fin de ayudar visualmente a la comprensión de términos complicados del medio oftalmológico.

Esto también con el propósito de tratar de ayudar un poco a la ciudadanía a una mejor comunicación visual, aprendiendo a utilizar diferentes ramas de investigación y de estudio.

¿Cómo será esta aplicación?

Será un producto digital animado que se va a visualizar, ya sea en una pantalla normal o en computadora, deberá de tener una cámara, la cual captará el sensor del Wiimote.

El Wiimote estará programado y sincronizado con un software llamado SpaceCam, el cual presentará de manera visual el ojo humano en 3D y una interfaz para poder navegar en las principales patologías del ojo humano. En esta interfaz también se encontrarán íconos que, con el Wiimote, se podrán manipular permitiendo rotarlo o moverlo. Con la simple navegación en la interfaz, se puede tener más interactividad y sensibilidad al movimiento.

Como ya habíamos mencionado, el resultado de esta investigación será un material de apoyo al oftalmólogo que permitirá la visualización del diagnóstico del paciente, quien a su vez podrá entender su patología, teniendo más claros los términos científicos.

Cuando se apriete en el menú alguna patología, deberá de tener una transición animada. Al final de ésta aparecerá el ojo en 3D con la patología seleccionada e información dinámica o interactiva. En algún lugar habrá íconos con animaciones y con funciones para la manipulación del ojo. Cuando se apriete el botón o ícono, habrá diferentes sonidos.
';
$prg->objetivos = 'Desarrollar un material informativo animado, que explique el fondo del ojo humano, para darle una herramienta de apoyo a los oftalmólogos, identificando el software 3D más indicado, que contenga realidad virtual y tecnología Wii.
';
$prg->hipotesis = 'Con el Wiimote, se puede tener un producto digital con interactividad avanzada, fácil de utilizar, en poco tiempo de explicar y de bajo costo.

Si la mayor parte de los diagnósticos oftalmológicos se basa en imágenes vistas o captadas, detectando patologías en el fondo del ojo,entonces un material que las explique deberá de centrarse en la visualización, información e interactividad.

Si trabajamos un objeto modelado 3D con bajo nivel de (si se trabaja con curvas serán NURBS y si se trabaja sin curvas serán POLIGONS), en cuadros con rigging, podremos controlar el movimiento del objeto 3D sin que se deforme.

El software 3D debe de presentar lo siguiente:

-Que se pueda trabaja con un modelado de polígonos, nurbs o surcase
-Que permita el texturizar con imágenes externas y sacar render
-Que se pueda modificar el objeto
-Que contenga diferentes formatos de importación y exportación
-Que permita el tratamiento de luz y sombra
-Que el desarrollador conozca del software propuesto, en este caso es Maya, para obtener un resultado confiable.
';


$id = R::store($prg);
echo 'Create: '.$id;

}
 ?>
