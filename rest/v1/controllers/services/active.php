<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Services.php';

$conn = null;
$conn = checkDbConnection();

$services = new Services($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("servicesid", $_GET)) {

        checkPayload($data);
        $services->services_aid = $_GET['servicesid'];
        $services->services_is_active = trim($data["isActive"]);
        $services->services_datetime = date("Y-m-d H:i:s");
        checkId($services->services_aid);
        $query = checkActive($services);
        http_response_code(200);
        returnSuccess($services, "services", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();