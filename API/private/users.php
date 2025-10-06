<?php

require_once 'db.php';

function ListUsers() {
    global $pdo;
    header('Content-Type: application/json');

    $headers = array_change_key_case(getallheaders(), CASE_LOWER);
    if (!isset($headers['id']) && !isset($headers['username']) && !isset($headers['email']) && !isset($headers['name']) &&
        !isset($headers['phonenumber']) && !isset($headers['date_of_birth']) && !isset($headers['male'])) {
            $query = "SELECT * FROM users";
            $stmt = $pdo->prepare($query);
            $stmt->execute();
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);

        exit;
    }

    $where = [];
    $params = [];

    if (!empty($headers['id']) && is_numeric($headers['id'])) {
        $where[] = "id = :id";
        $params['id'] = $headers['id'];
    }

    if (!empty($headers['username'])) {
        $where[] = "username = :username";
        $params['username'] = $headers['username'];
    }

    if (!empty($headers['email'])) {
        $where[] = "email = :email";
        $params['email'] = $headers['email'];
    }
    if (!empty($headers['name'])) {
        $where[] = "name = :name";
        $params['name'] = $headers['name'];
    }

    if (!empty($headers['phonenumber'])) {
        $where[] = "phonenumber = :phonenumber";
        $params['phonenumber'] = $headers['phonenumber'];
    }

    if (!empty($headers['date_of_birth'])) {
        $where[] = "date_of_birth = :date_of_birth";
        $params['date_of_birth'] = $headers['date_of_birth'];
    }

    if (!empty($headers['male']) &&is_numeric($headers['male']) && ($headers['male'] == 0 || $headers['male'] == 1)) {
        $where[] = "male = :male";
        $params['male'] = $headers['male'];
    }

    $sql = "SELECT * from users";

    if ($where) {
        $sql .= " WHERE " . implode(" AND ", $where);
    }

    $sql .= " ORDER BY id";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}
?>