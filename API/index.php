<?php

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

Auth();
switch($endpoint)
{
    case "carads":
        if ($requestMethod === 'GET')
        {
            if(isset($headers['Active']) && $headers["Active"] == "true")
            {
                $adID = isset($requestUri[$indexPhpPos + 2]) && is_numeric($requestUri[$indexPhpPos + 2])
                    ? (int)$requestUri[$indexPhpPos + 2]: null;
                ListACADS($adID);
            }
            else
            {
                $adID = isset($requestUri[$indexPhpPos + 2]) && is_numeric($requestUri[$indexPhpPos + 2])
                    ? (int)$requestUri[$indexPhpPos + 2]: null;
                ListCADS($adID);
            }

        }
        else
        http_response_code(405);
        break;
    case "peopleads":
        if ($requestMethod === 'GET') {
  
            ListActiveCarAds();

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