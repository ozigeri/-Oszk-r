<?php

require_once 'db.php';

function ListAPADS(?int $id = null){
    header('Content-Type: application/json');
    $activePeopleAds = GetActivePeopleAds($id);
    echo json_encode($activePeopleAds, JSON_PRETTY_PRINT);
}

function ListPADS(?int $id = null){
    header('Content-Type: application/json');
    $peopleAds = GetAllPeopleAds($id);
    echo json_encode($peopleAds, JSON_PRETTY_PRINT);
}

function ListPeopleApps(?int $id = null){
    header('Content-Type: application/json');
    $peopleApps = GetPeopleApps($id);
    echo json_encode($peopleApps, JSON_PRETTY_PRINT);
}


?>