<?php

require_once 'db.php';

function ListRoutes(string $table, string $direction){
    global $pdo;
    header('Content-Type: application/json');

    $query = "SELECT DISTINCT `$direction` FROM `$table` WHERE date >= NOW()";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}

?>