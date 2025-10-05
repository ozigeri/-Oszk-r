<?php

require_once 'db.php';

function ListActiveCarAds(){
    global $pdo;
    header('Content-Type: application/json');

    $headers = array_change_key_case(getallheaders(), CASE_LOWER);

    $where = [];
    $params = [];

    if (!empty($headers['active']) && $headers['active'] === 'true') {
        $where[] = "ca.timestamp >= NOW()";
    }

    if (!empty($headers['id']) && is_numeric($headers['id'])) {
        $where[] = "ca.id = :id";
        $params['id'] = $headers['id'];
    }

    if (!empty($headers['from'])) {
        $where[] = "ca.from = :from";
        $params['from'] = $headers['from'];
    }

    if (!empty($headers['to'])) {
        $where[] = "ca.to = :to";
        $params['to'] = $headers['to'];
    }

    if (!empty($headers['date'])) {
        $where[] = "DATE(ca.timestamp) = :date";
        $params['date'] = $headers['date'];
    }

    if (!empty($headers['maxprice'])) {
        $where[] = "ca.price <= :max_price";
        $params['max_price'] = $headers['maxprice'];
    }

    if (!empty($headers['maxspace'])) {
        $where[] = "ca.spaces <= :maxspace";
        $params['maxspace'] = $headers['maxspace'];
    }

    $sql = "SELECT ca.*,
                   (SELECT COUNT(*) FROM carapplications WHERE caradv_id = ca.id) AS emberekSzama
            FROM caradvertisements ca";

    if ($where) {
        $sql .= " WHERE " . implode(" AND ", $where);
    }

    $sql .= " ORDER BY ca.timestamp";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}

function ListCarApps(?int $id = null){
    global $pdo;
    header('Content-Type: application/json');

    $params = [];
    $sql = "SELECT * FROM carapplications";

    if ($id !== null && is_numeric($id)) {
        $sql .= " WHERE caradv_id = :caradv_id";
        $params['caradv_id'] = $id;
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}


?> 