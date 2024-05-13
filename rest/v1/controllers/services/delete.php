<?php
$conn = null;
$conn = checkDbConnection();
$services = new Services($conn);

$error = [];
$returnData = [];
if (array_key_exists("servicesid", $_GET)) {
    $services->services_aid = $_GET['servicesid'];
    checkId($services->services_aid);

    $query = checkDelete($services);
    returnSuccess($services, "services", $query);
}

checkEndpoint();