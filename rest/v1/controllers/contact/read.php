<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($contact);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();