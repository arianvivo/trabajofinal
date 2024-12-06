<?php
// SIMULA DEMORA EN LA CARGA
// sleep(5);
$response = [];
$files = scandir('../img/gallery/');
foreach($files as $file) {
   if ($file == "." || $file == "..") { continue; }
   array_push($response, $file);
}

echo json_encode($response);

?>