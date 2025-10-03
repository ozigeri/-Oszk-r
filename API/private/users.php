<?php

require_once 'db.php';

function ListUserById(int $id){
    $userid = intval($id);
    header('Content-Type: application/json');
    $userData = GetUserById($userid);
    echo json_encode($userData, JSON_PRETTY_PRINT);
    
}


function ListUsers(?int $id = null){
    header('Content-Type: application/json');
    $users = GetUserById($id);
    echo json_encode($users, JSON_PRETTY_PRINT);
}


?>