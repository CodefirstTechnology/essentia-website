<?php
/**
 * Inquiry form handler — GoDaddy shared hosting (PHP mail)
 * Receives POST data and sends to info@aariaastro.com
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$adminEmail = 'info@aariaastro.com';
$fromEmail  = 'noreply@aariaastro.com';

function clean_input($value)
{
    $value = trim($value ?? '');
    $value = str_replace(["\r", "\n", "%0a", "%0d"], '', $value);
    return htmlspecialchars(strip_tags($value), ENT_QUOTES, 'UTF-8');
}

$fullName = clean_input($_POST['full_name'] ?? '');
$email    = clean_input($_POST['email'] ?? '');
$phone    = clean_input($_POST['phone'] ?? '');
$interest = clean_input($_POST['interest'] ?? '');

if ($fullName === '' || $email === '' || $phone === '' || $interest === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

if (!preg_match('/^\d{10,15}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid phone number.']);
    exit;
}

$subject = 'New Inquiry from Website';

$body  = "Full Name: {$fullName}\r\n";
$body .= "Email: {$email}\r\n";
$body .= "Phone: {$phone}\r\n";
$body .= "Interest: {$interest}\r\n";

$headers  = "From: Essentia Website <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = @mail($adminEmail, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail delivery failed.']);
}
