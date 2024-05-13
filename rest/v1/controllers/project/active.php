<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Project.php';

$conn = null;
$conn = checkDbConnection();

$project = new Project($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("projectid", $_GET)) {

        checkPayload($data);
        $project->project_aid = $_GET['projectid'];
        $project->project_is_active = trim($data["isActive"]);
        $project->project_datetime = date("Y-m-d H:i:s");
        checkId($project->project_aid);
        $query = checkActive($project);
        http_response_code(200);
        returnSuccess($project, "project", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();