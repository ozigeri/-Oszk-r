<?php

require_once 'db.php';
function ListRoutes(){
    global $pdo;
    header('Content-Type: application/json');

    $headers = array_change_key_case(getallheaders(), CASE_LOWER);

    $table = $headers['table'] ?? null;
    $direction = $headers['direction'] ?? null;

    $sql = "SELECT DISTINCT `$direction` FROM `$table` WHERE date >= NOW()";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}

?>