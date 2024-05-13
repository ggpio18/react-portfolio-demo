<?php
$conn = null;
$conn = checkDbConnection();
$project = new Project($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($project);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();