<?php

require_once 'db.php';

function ListAPADS(?int $id = null){
    global $pdo;
    header('Content-Type: application/json');

    $params = [];
    $sql = "SELECT pa.*, 
                   (SELECT COUNT(*) FROM peopleapplications WHERE peopleadv_id = pa.id) AS applicant_count 
            FROM peopleadvertisements pa";

    if ($id !== null && is_numeric($id)) {
        $sql .= " WHERE pa.id = :id AND pa.date >= CURDATE() LIMIT 1";
        $params['id'] = $id;
    } else {
        $sql .= " WHERE pa.date >= CURDATE() ORDER BY pa.date";
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC), JSON_PRETTY_PRINT);
}



function ListPADS(?int $id = null){
    global $pdo;
    header('Content-Type: application/json');

    $params = [];
    $sql = "SELECT pa.*, 
                   (SELECT COUNT(*) FROM peopleapplications papp WHERE papp.peopleadv_id = pa.id) AS applicant_count 
            FROM peopleadvertisements pa";

    if ($id !== null && is_numeric($id)) {
        $sql .= " WHERE pa.id = :id LIMIT 1";
        $params['id'] = $id;
    } else {
        $sql .= " ORDER BY pa.date";
    }

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