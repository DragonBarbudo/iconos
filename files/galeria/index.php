<?php

$files = array();

$counter = 0;
foreach (new DirectoryIterator('../galeria') as $fileInfo) {
    if($fileInfo->isDot()) continue;

    $name = $fileInfo->getFilename();
    $pre = substr( $name, 0, 3);
    $mime = mime_content_type($fileInfo->getPathname());
    if($mime == 'image/jpeg' || $mime == 'image/png' || $mime == 'image/gif'){
      #$files[$counter][0] = $pre;
      #$files[$counter] = $name;
      #$files[$counter]['mime'] = $mime;
      array_push($files, $name);
    }
    $counter++;
}
echo json_encode($files);

 ?>
