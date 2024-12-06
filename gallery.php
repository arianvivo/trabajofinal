<?php
header('Content-Type: application/json');
$response = [];
$files = scandir('../img/gallery/');
foreach($files as $file) {
    if ($file == "." || $file == "..") { continue; }
    array_push($response, $file);
}

echo json_encode($response);
?>