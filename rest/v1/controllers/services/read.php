<?php
$conn = null;
$conn = checkDbConnection();
$services = new Services($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($services);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();