<?php
require_once 'config.php';

$pdo = null;

try{
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e) {
    die('Nem lehet csatlakozni az adatbázishoz!');
}

function getJoinedCarAdsAs(): string {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users INNER JOIN caradvertisements ON users.id = caradvertisements.userid");
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($results, JSON_PRETTY_PRINT);
}




function ListActivePeopleAds(): string {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM peopleadvertisements where date >= NOW()");
    $stmt ->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($results, JSON_PRETTY_PRINT);
}

function ListActiveCarAds() {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM caradvertisements where timestamp >= NOW()");
    $stmt ->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results, JSON_PRETTY_PRINT);
}