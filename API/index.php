<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Content-Type, Active");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$requestMethod = $_SERVER['REQUEST_METHOD'];
$urlData = parse_url($_SERVER['REQUEST_URI']);
$requestUri = explode('/', trim($urlData['path'], '/'));
$headers = getallheaders();
$indexPhpPos = array_search('index.php', $requestUri);
$endpoint = $requestUri[$indexPhpPos + 1] ?? null;

require_once 'private/db.php';
require_once 'private/auth.php';
require_once 'private/carads.php';
require_once 'private/peopleads.php';
require_once 'private/users.php';
require_once 'private/routes.php';

Auth();
switch($endpoint)
{
    case "routes":
        if ($requestMethod === 'GET')
        {
            ListRoutes();
        }
        else
        http_response_code(400);
        break;
    case "carads":
        if ($requestMethod === 'GET')
        {
            ListActiveCarAds();
        }
        else
        http_response_code(405);
        break;
    case "carapps":
        if ($requestMethod === 'GET')
        {
            $adID = isset($requestUri[$indexPhpPos + 2]) && is_numeric($requestUri[$indexPhpPos + 2])
                ? (int)$requestUri[$indexPhpPos + 2]: null;
            ListCarApps($adID);
        }
        else
        http_response_code(405);
        break;
    case "peopleads":
        if ($requestMethod === 'GET')
        {
            ListPADS();
        }
        else
        http_response_code(405);
        break;
    case "peopleapps":
        if ($requestMethod === 'GET')
        {
            $adID = isset($requestUri[$indexPhpPos + 2]) && is_numeric($requestUri[$indexPhpPos + 2])
                ? (int)$requestUri[$indexPhpPos + 2]: null;
            ListPeopleApps($adID);
        }
        else
        http_response_code(405);
        break;
    case "users":
        if ($requestMethod === 'GET') 
        {
            $userID = isset($requestUri[$indexPhpPos + 2]) && is_numeric($requestUri[$indexPhpPos + 2])
                ? (int)$requestUri[$indexPhpPos + 2]: null;
            ListUsers($userID);
        }
        else
        http_response_code(405);
        break;
    default:
        http_response_code(404);
        break;
}

?>