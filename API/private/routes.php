<?php

require_once 'db.php';

function ListRoutes(string $table, string $direction){
    header('Content-Type: application/json');
    $routes = GetRoutes($table, $direction);
    echo json_encode($routes, JSON_PRETTY_PRINT);
}

?>