<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Contact.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$contact = new Contact($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $contact->contact_search = $data["searchValue"];
    checkKeyword($contact->contact_search);
    $query = checkSearch($contact);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();