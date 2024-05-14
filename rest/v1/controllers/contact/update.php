<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);
$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    checkPayload($data);
    $contact->contact_aid = $_GET['contactid'];
    $contact->contact_fullname = checkIndex($data, "contact_fullname");
    $contact->contact_publicemail = checkIndex($data, "contact_publicemail");
    $contact->contact_publicnumber = checkIndex($data, "contact_publicnumber");
    $contact->contact_datetime = date("Y-m-d H:i:s");

    checkId($contact->contact_aid);
    // $contact_name_old = checkIndex($data, "contact_name_old");
    // compareName($contact, $contact_name_old, $contact->contact_name);
    $query = checkUpdate($contact);
    returnSuccess($contact, "contact", $query);
}

checkEndpoint();