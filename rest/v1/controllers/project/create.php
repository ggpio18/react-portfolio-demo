<?php
$conn = null;
$conn = checkDbConnection();
$project = new Project($conn);
if (array_key_exists("projectid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$project->project_pl = checkIndex($data, "project_pl");
$project->project_title = checkIndex($data, "project_title");
$project->project_description = checkIndex($data, "project_description");
$project->project_img = checkIndex($data, "project_img");
$project->project_is_active = 1;
$project->project_created = date("Y-m-d H:i:s");
$project->project_datetime = date("Y-m-d H:i:s");


// istitleExist($project, $project->project_title);

$query = checkCreate($project);
returnSuccess($project, "project", $query);