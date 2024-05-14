<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Contact.php';

$conn = null;
$conn = checkDbConnection();

$contact = new Contact($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("contactid", $_GET)) {

        checkPayload($data);
        $contact->contact_aid = $_GET['contactid'];
        $contact->contact_is_active = trim($data["isActive"]);
        $contact->contact_datetime = date("Y-m-d H:i:s");
        checkId($contact->contact_aid);
        $query = checkActive($contact);
        http_response_code(200);
        returnSuccess($contact, "contact", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();