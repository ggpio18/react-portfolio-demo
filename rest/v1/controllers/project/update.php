<?php
$conn = null;
$conn = checkDbConnection();
$project = new Project($conn);
$error = [];
$returnData = [];
if (array_key_exists("projectid", $_GET)) {
    checkPayload($data);
    $project->project_aid = $_GET['projectid'];
    $project->project_pl = checkIndex($data, "project_pl");
    $project->project_title = checkIndex($data, "project_title");
    $project->project_description = checkIndex($data, "project_description");
    $project->project_img = checkIndex($data, "project_img");
    $project->project_datetime = date("Y-m-d H:i:s");

    checkId($project->project_aid);
    // $project_name_old = checkIndex($data, "project_name_old");
    // compareName($project, $project_name_old, $project->project_name);
    $query = checkUpdate($project);
    returnSuccess($project, "project", $query);
}

checkEndpoint();