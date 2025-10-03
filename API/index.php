<?php

    include './private/db.php';
    include './private/auth.php';
    Auth();
    $json = ListActivePeopleAds($pdo);

    header('Content-Type: application/json');
    echo $json;
?>
