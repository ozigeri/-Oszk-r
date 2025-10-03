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
    $stmt = $pdo->prepare("SELECT * FROM users INNER JOIN peopleadvertisements	 ON users.id = peopleadvertisements	.userid");
    $stmt ->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetActivePeopleAds() {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM peopleadvertisements where date >= NOW()");
    $stmt ->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetActiveCarAds(?int $id = null) {
    global $pdo;

    if ($id && is_numeric($id)) {
        $stmt = $pdo->prepare("SELECT * FROM caradvertisements WHERE id = :id AND timestamp >= NOW()");
        $stmt->execute(['id' => $id]);
    } else {
        $stmt = $pdo->prepare("SELECT * FROM caradvertisements WHERE timestamp >= NOW()");
        $stmt->execute();
    }

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function GetAllCarAds(?int $id = null) {
    global $pdo;

    $query = "SELECT * FROM caradvertisements";

    if ($id && is_numeric($id)) {
        $query .= " WHERE id = :id";
      }
    
      $stmt = $pdo->prepare($query);
      $stmt->execute($id ? ['id' =>$id] : []);
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
