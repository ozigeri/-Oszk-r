<?php

require_once 'db.php';
function ListRoutes(){
    global $pdo;
    header('Content-Type: application/json');

    $headers = array_change_key_case(getallheaders(), CASE_LOWER);

    if (!isset($headers['table']) || !isset($headers['direction'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Hiányos header'], JSON_PRETTY_PRINT);
        exit;
    }
    $table = $headers['table'];
    $direction = $headers['direction'];

    $sql = "SELECT DISTINCT `$direction` FROM `$table` WHERE timestamp >= NOW()";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}

?>