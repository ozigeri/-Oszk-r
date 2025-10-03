<?php

define("API_TOKEN", "HUNt1");
function Auth(){
    $headers = getallheaders();
    if(!isset($headers['Authorization']) || $headers["Authorization"] !== "Bearer " . API_TOKEN)
    {
        http_response_code(401);
        echo json_encode(["error" => "Nem sikerült a hitelesítés!"], JSON_UNESCAPED_UNICODE);
        exit;
    }
}