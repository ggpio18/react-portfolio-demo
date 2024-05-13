<?php
$conn = null;
$conn = checkDbConnection();
$services = new Services($conn);
if (array_key_exists("servicesid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$services->services_title = checkIndex($data, "services_title");
$services->services_par = checkIndex($data, "services_par");
$services->services_is_active = 1;
$services->services_created = date("Y-m-d H:i:s");
$services->services_datetime = date("Y-m-d H:i:s");


// istitleExist($services, $services->services_title);

$query = checkCreate($services);
returnSuccess($services, "services", $query);