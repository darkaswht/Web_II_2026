<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doguito_petshop";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "conexión mala: " . $conn->connect_error]));
}

$tablaMap = [
    "perfil"    => ["tabla" => "cliente",  "campo2" => "email"],
    "productos" => ["tabla" => "producto", "campo2" => "precio"],
    "pets"      => ["tabla" => "pet",      "campo2" => "especie"],
];

$endpoint = $_GET['tabla'] ?? "perfil";
if (!isset($tablaMap[$endpoint])) {
    http_response_code(400);
    die(json_encode(["error" => "tabla no válida"]));
}

$tabla  = $tablaMap[$endpoint]["tabla"];
$campo2 = $tablaMap[$endpoint]["campo2"];
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $stmt = $conn->prepare("SELECT * FROM `$tabla` WHERE id = ?");
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            echo json_encode($result->fetch_assoc());
        } else {
            $result = $conn->query("SELECT * FROM `$tabla`");
            $rows = [];
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        break;

    case 'POST':
        $input  = json_decode(file_get_contents("php://input"), true);
        $id     = $input['id'] ?? uniqid();
        $nombre = $input['nombre'] ?? null;
        $val2   = $input[$campo2] ?? null;
        $stmt   = $conn->prepare("INSERT INTO `$tabla` (id, nombre, $campo2) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $id, $nombre, $val2);
        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "creado con éxito", "id" => $id]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "error al crear"]);
        }
        break;

    case 'PUT':
        $input  = json_decode(file_get_contents("php://input"), true);
        $id     = $input['id'] ?? $_GET['id'] ?? null;
        $nombre = $input['nombre'] ?? null;
        $val2   = $input[$campo2] ?? null;
        $stmt   = $conn->prepare("UPDATE `$tabla` SET nombre=?, $campo2=? WHERE id=?");
        $stmt->bind_param("sss", $nombre, $val2, $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "actualizado exitosamente"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "error al actualizar"]);
        }
        break;

    case 'DELETE':
        $id   = $_GET['id'] ?? null;
        $stmt = $conn->prepare("DELETE FROM `$tabla` WHERE id=?");
        $stmt->bind_param("s", $id);
        if ($stmt->execute()) {
            echo json_encode(["message" => "eliminado exitosamente"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "error al eliminar"]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "método no permitido"]);
}

$conn->close();
?>
