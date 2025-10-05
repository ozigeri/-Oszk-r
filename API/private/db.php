<?php
require_once 'config.php';

$pdo = null;

try{
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e) {
    die('Nem lehet csatlakozni az adatbázishoz!');
}

function getJoinedCarAds() {
    global $pdo;
    $stmt = $pdo->prepare("SELECT caradvertisements.*FROM users INNER JOIN caradvertisements ON users.id = caradvertisements.userid");
    $stmt ->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getJoinedPeopleAds() {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users INNER JOIN peopleadvertisements	 ON users.id = peopleadvertisements.userid");
    $stmt ->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetActiveCarAds(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT ca.*,(SELECT COUNT(*) FROM carapplications WHERE caradv_id = ca.id) AS emberekSzama FROM caradvertisements ca WHERE ca.id = :id AND ca.timestamp >= NOW() LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
    } else {
        $sql = "SELECT ca.*, (SELECT COUNT(*) FROM carapplications WHERE caradv_id = ca.id) AS emberekSzama FROM caradvertisements ca WHERE ca.timestamp >= NOW() ORDER BY ca.timestamp";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function GetAllCarAds(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT ca.*, (SELECT COUNT(*) FROM carapplications WHERE caradv_id = ca.id) AS emberekSzama FROM caradvertisements ca WHERE ca.id = :id LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
    } else {
        $sql = "SELECT ca.*, (SELECT COUNT(*) FROM carapplications WHERE caradv_id = ca.id) AS emberekSzama FROM caradvertisements ca ORDER BY ca.timestamp";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}



function GetUserById(?int $id) {
    global $pdo;

    $query = "SELECT * FROM users";
  
    if ($id && is_numeric($id)) {
      $query .= " WHERE id = :id";
    }
  
    $stmt = $pdo->prepare($query);
    $stmt->execute($id ? ['id' =>$id] : []);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function GetRoutes(string $table, string $direction)
{
    global $pdo;

    $query = "SELECT DISTINCT `$direction` FROM `$table` WHERE date >= NOW()";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function GetActivePeopleAds(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT pa.*, (SELECT COUNT(*) FROM peopleapplications WHERE peopleadv_id = pa.id) AS applicant_count FROM peopleadvertisements pa WHERE pa.id = :id AND pa.date >= CURDATE() LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
    } else {
        $sql = "SELECT pa.*, (SELECT COUNT(*) FROM peopleapplications WHERE peopleadv_id = pa.id) AS applicant_count FROM peopleadvertisements pa WHERE pa.date >= CURDATE() ORDER BY pa.date";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetAllPeopleAds(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT pa.*, (SELECT COUNT(*) FROM peopleapplications WHERE peopleadv_id = pa.id) AS applicant_count FROM peopleadvertisements pa WHERE pa.id = :id LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['id' => $id]);
    } else {
        $sql = "SELECT pa.*, (SELECT COUNT(*) FROM peopleapplications papp WHERE papp.peopleadv_id = pa.id) AS applicant_count FROM peopleadvertisements pa ORDER BY pa.date";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetCarApps(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT * FROM carapplications WHERE caradv_id = :caradv_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['caradv_id' => $id]);
    } else {
        $sql = "SELECT * FROM carapplications";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetPeopleApps(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $sql = "SELECT * FROM peopleapplications WHERE peopleadv_id = :peopleadv_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['peopleadv_id' => $id]);
    } else {
        $sql = "SELECT * FROM peopleapplications";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}