<?php
require 'rb.php';
require 'setup.php';


if(isset($_GET['clave'])){
  $clave = $_GET['clave'];
  $bean = R::findOne('programa', "clave = '$clave' " );
  if($bean){
    $array = $bean->export();
    echo json_encode($array);
  } else {
    echo '{}';
  }

} else if(isset($_GET['add'])){

$prg = R::dispense('programa');
$prg->nombre = 'Comunicación con medios virtuales';
$prg->clave = 'cmv';
$prg->nivel= 'Maestría';
$prg->descripcion='Formar maestros con una alta capacidad profesional de comunicación a través de la investigación y el desarrollo de medios virtuales, apoyados en el dominio de las tecnologías digitales y los lenguajes de programación, para la generación de multimedia e interactividad, así como el diseño y gestión de sitios Web, la animación y modelado 3D, las estrategias de significación visual, el desarrollo de publicidad digital, la experimentación en el arte digital o la capacitación en el ejercicio de la docencia en este campo.
';

$prg->objetivosParticulares = '**Distinguir los fundamentos** teóricos y prácticos de los medios virtuales, para la planeación de los procesos de generación de comunicación e información digital.

**Utilizar las metodologías** de investigación adecuadas al campo emergente digital, para el desarrollo de los medios virtuales.

**Proyectar los procesos** de gestión, desarrollo y producción de sitios Web, para el diseño de productos digitales sencillos y complejos.

**Utilizar los lenguajes** de programación para el diseño de sitios web y aplicaciones enriquecidas.

**Fundamentar el trabajo** de la comunicación con medios virtuales desde formulaciones éticas, para defender la solución de problemas que favorezcan el desarrollo del contexto cercano.

**Y de manera opcional** Generar animaciones en 2D así como desarrollos interactivos basados en ActionScript.

**Integrar las herramientas** del modelado y la producción y postproducción digital, para el diseño de comunicación animada 3D.

**Distinguir los fundamentos** de las teorías de la significación visual, para utilizarlos en el desarrollo de medios virtuales.

**Relacionar los principios** de la mercadotecnia y la publicidad, para diseñar medios virtuales que resuelvan problemas de promoción de productos y servicios contemporáneos.

**Investigar los alcances** de las herramientas digitales multimediáticas y sus lenguajes de programación, para crear arte digital.

**Identificar las variables** pedagógicas, para el desarrollo de estrategias didácticas a través de medios virtuales dirigidos al ejercicio docente de los medios virtuales.
';

$prg->perfilDeIngreso = 'Los aspirantes a la maestría en Comunicación con Medios Virtuales, serán preferentemente los egresados de las licenciaturas en **Comunicación, Diseño Gráfico, Mercadotecnia, Sistemas Computacionales o afines**. También los profesionales de las ingenierías en Sistemas o con nombres similares.

Los egresados de otras licenciaturas e ingenierías, podrán ingresar siempre y cuando justifiquen su relación con los contenidos del programa de estudios. Se deberán acreditar los cursos propedéuticos que sean necesarios, sobre todo para quienes vienen de otros campos de estudio.
';

$prg->plan = '1er cuatrimestre

- Comunicación y Cultura Digital.
- Fundamentos de sitios Web.
- Hojas de estilo en cascada (CSS).
- Fundamentos de programación.

2ndo cuatrimestre

- Sitios web dinámicos con MySQL y PHP.
- Diseño de interfaces enriquecidas.
- Aplicaciones dinámicas para Web.

3er cuatrimestre

- Programación con XML.
- Desarrollo de aplicaciones para dispositivos móviles.
- Proyecto integrador.

4to cuatrimestre

- OPTATIVA I A.
- OPTATIVA I B.
- Taller de argumentación para la investigación.

5to cuatrimestre

- OPTATIVA II A.
- OPTATIVA II B.
- Proyecto de Investigación.

6to cuatrimestre

- OPTATIVA III A.
- OPTATIVA III B.
- Seminario de investigación y proyecto terminal.

Optativas IA

- Narrativa y guionismo para la animación.
- Animación básica 2D.
- Modelado de ambientes en 3D.

Optativas IIA

- Efectos especiales e interactividad.
- Modelado de personajes para 3D.
- Semiología de la comunicación.

Optativas IIIA

- Programación avanzada para interactividad enriquecida.
- Animación 3D.
- Teorías de la argumentación.

Optativas IB

- Animación intermedia 2D.
- Texturas y luces para 3D.
- Estrategias de comunicación publicitaria.
- Modelos de enseñanza y transdisciplina.
- Teorías de la imagen.

Optativas IIB

- Interactividad para materiales didácticos.
- Estructuras para la animación 3D.
- Procesos creativos publicitarios.
- Didáctica de la enseñanza en la cultura digital.
- Semiología de la imagen.

Optativas IIIB

- Audio digital.
- Programación avanzada para aplicaciones interactivas enriquecidas.
- Efectos especiales 3D.
- Estrategias de publicidad digital.
- Taller de recursos educativos no presenciales.
- Argumentación retórica visual.';
$prg->requisitos = '- Entrevista con el coordinador(a) de posgrado.
- Entrega de solicitud de ingreso a la maestría.
- Acta de nacimiento (original* y copia).
- Título de licenciatura (original para cotejo y copia por ambos lados).
- Cédula profesional o el comprobante de trámite (original y copia por ambos lados).
- 2 fotografías tamaño infantil, blanco y negro o a color.
- Currículum vitae.
- CURP (copia al 200%).
- Carta de exposición de motivos por los que se desea ingresar a la maestría.
- Carta de recomendación de institución educativa, de un académico o del jefe inmediato.

La documentación original, permanecerá en nuestro instituto por disposición oficial, hasta que usted concluya el programa mencionado.

En caso de que los estudios de maestría sean como opción de titulación para licenciatura, presentar carta de aceptación por parte de la institución de procedencia, liberación de servicio social y copia del certificado de estudios totales de licenciatura.

Los estudiantes extranjeros deberán presentar todos los documentos revalidados por la SEP, debidamente traducidos y legalizados por el ministerio de educación, ministerio de relaciones exteriores y el cónsul de México en el país donde se realizaron los estudios, así como el documento migratorio y partida de nacimiento.

Este programa cuenta con Reconocimiento de Validez Oficial de Estudios (RVOE), según el acuerdo número 2005625 de la Secretaría de Educación Pública, con fecha del 22 de septiembre del 2005.

ICONOS, Instituto de Investigación en Comunicación y Cultura está registrado ante la Dirección General de Profesiones con el número de expediente 09-00495, clave de institución D. G. P. 090615 y clave de la maestría referida D. G. P. 620599.
';


$id = R::store($prg);
echo $id;



}
 ?>
