<?php
$conn = null;
$conn = checkDbConnection();
$project = new Project($conn);

$error = [];
$returnData = [];
if (array_key_exists("projectid", $_GET)) {
    $project->project_aid = $_GET['projectid'];
    checkId($project->project_aid);

    $query = checkDelete($project);
    returnSuccess($project, "project", $query);
}

checkEndpoint();