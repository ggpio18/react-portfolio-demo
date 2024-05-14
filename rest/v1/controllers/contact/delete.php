<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);

$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    $contact->contact_aid = $_GET['contactid'];
    checkId($contact->contact_aid);

    $query = checkDelete($contact);
    returnSuccess($contact, "contact", $query);
}

checkEndpoint();