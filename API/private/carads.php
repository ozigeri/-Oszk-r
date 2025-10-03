<?php

require_once 'db.php';

function ListACADS() 
{
    header('Content-Type: application/json');
    $activeCarAds = getJoinedCarAds();
    echo json_encode($activeCarAds, JSON_PRETTY_PRINT);
    
}

?>