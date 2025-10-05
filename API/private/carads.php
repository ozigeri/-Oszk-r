<?php

require_once 'db.php';


function ListACADS(?int $id = null){
    header('Content-Type: application/json');
    $activeCarAds = GetActiveCarAds($id);
    echo json_encode($activeCarAds, JSON_PRETTY_PRINT);
}

function ListCADS(?int $id = null){
    header('Content-Type: application/json');
    $carAds = GetAllCarAds($id);
    echo json_encode($carAds, JSON_PRETTY_PRINT);
}

function ListCarApps(?int $id = null){
    header('Content-Type: application/json');
    $carApps = GetCarApps($id);
    echo json_encode($carApps, JSON_PRETTY_PRINT);
}


?>