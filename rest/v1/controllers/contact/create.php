<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);
if (array_key_exists("contactid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$contact->contact_fullname = checkIndex($data, "contact_fullname");
$contact->contact_publicemail = checkIndex($data, "contact_publicemail");
$contact->contact_publicnumber = checkIndex($data, "contact_publicnumber");
$contact->contact_is_active = 1;
$contact->contact_created = date("Y-m-d H:i:s");
$contact->contact_datetime = date("Y-m-d H:i:s");


// istitleExist($contact, $contact->contact_title);

$query = checkCreate($contact);
returnSuccess($contact, "contact", $query);