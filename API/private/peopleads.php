<?php

require_once 'db.php';

function ListPADS(){
    global $pdo;
    header('Content-Type: application/json');

    $headers = array_change_key_case(getallheaders(), CASE_LOWER);

    $where = [];
    $params = [];

    if (!empty($headers['active']) && $headers['active'] === 'true') {
        $where[] = "`date` >= NOW()";
    }
    
    if (!empty($headers['id']) && is_numeric($headers['id'])) {
        $where[] = "id = :id";
        $params['id'] = $headers['id'];
    }
    
    if (!empty($headers['from'])) {
        $where[] = "`from` = :from";
        $params['from'] = $headers['from'];
    }
    
    if (!empty($headers['to'])) {
        $where[] = "`to` = :to";
        $params['to'] = $headers['to'];
    }
    
    if (!empty($headers['date'])) {
        $where[] = "DATE(`date`) = :date";
        $params['date'] = $headers['date'];
    }
    
    if (!empty($headers['maxpeople'])) {
        $where[] = "countofpeople <= :maxpeople";
        $params['maxpeople'] = $headers['maxpeople'];
    }
    
    $sql = "SELECT * FROM peopleadvertisements";
    
    if ($where) {
        $sql .= " WHERE " . implode(" AND ", $where);
    }
    
    $sql .= " ORDER BY `date`";
    

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}






function ListPeopleApps(?int $id = null){
    global $pdo;
    header('Content-Type: application/json');

    $params = [];
    $sql = "SELECT * FROM peopleapplications";

    if ($id !== null && is_numeric($id)) {
        $sql .= " WHERE peopleadv_id = :peopleadv_id";
        $params['peopleadv_id'] = $id;
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}


function getJoinedPeopleAds() {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users INNER JOIN peopleadvertisements	 ON users.id = peopleadvertisements.userid");
    $stmt ->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

?>