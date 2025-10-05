<?php

require_once 'db.php';

function ListUsers(?int $id = null){
    global $pdo;
    header('Content-Type: application/json');

    $query = "SELECT * FROM users";
    $params = [];

    if ($id !== null && is_numeric($id)) {
        $query .= " WHERE id = :id";
        $params['id'] = intval($id);
    }

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}


?>