<?php

$requestMethod = $_SERVER['REQUEST_METHOD'];
$urlData = parse_url($_SERVER['REQUEST_URI']);
$requestUri = explode('/', trim($urlData['path'], '/'));

require_once 'private/db.php';
require_once 'private/auth.php';



switch($requestUri[2])
{
    case "students":
        if ($requestMethod === 'GET') {
          Auth();
          ListActiveCarAds();

        }
        else if ($requestMethod === 'PUT')
        {
            if(isset($requestUri[2]) && is_numeric($requestUri[2])){
                Auth();
                $studentId = (int)$requestUri[2];
                $data = json_decode(file_get_contents("php://input"), true);
                addStudent($studentId, $data);
            }
        } else
        http_response_code(405);
        break;
    case "subjects":
        if ($requestMethod==='GET'){
            Auth();
            listSubjects();
        } else
        http_response_code(405);
        break;
    case "grades":
        if ($requestMethod === 'GET'){
            Auth();
            $studentId = isset($_GET['student_id']) && is_numeric($_GET['student_id']) ? intval($_GET['student_id']) : null;
            if(!$studentId){
                listGrades();
            } else {
                listGrades($studentId);
            }
        }
        else if ($requestMethod === 'POST'){
            Auth();
            $data = json_decode(file_get_contents("php://input"), true);
            addGrade($data);
        } else if ($requestMethod === 'DELETE' && isset($requestUri[2])){
            Auth();
            $gradeId = intval($requestUri[2]);
            deleteGrade($gradeId);
        } else
        http_response_code(405);
        break;
    default:
        http_response_code(404);
        break;
}