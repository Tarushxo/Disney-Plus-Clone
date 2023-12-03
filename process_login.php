<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        
        $email = $_POST["email"];
        $password = $_POST["password"];

        
        if (empty($email) || empty($password)) {
            echo "Email and password are required.";
        } else {
            
            $db = new mysqli("email", "password");

            if ($db->connect_error) {
                die("Connection failed: " . $db->connect_error);
            }

            
            $email = $db->real_escape_string($email);

            
            $stmt = $db->prepare("SELECT * FROM users_table WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows == 1) {
                $user = $result->fetch_assoc();
                $hashedPassword = $user["password"];

                
                if (password_verify($password, $hashedPassword)) {
                    
                    echo "Login successful!";
                } else {
                    echo "Incorrect password.";
                }
            } else {
                echo "User not found.";
            }

            $stmt->close();
            $db->close();
        }
    } elseif (isset($_POST['signup'])) {
        
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirm_password = $_POST["confirm_password"];

        
        if (empty($name) || empty($email) || empty($password) || empty($confirm_password)) {
            echo "All fields are required.";
        } elseif ($password !== $confirm_password) {
            echo "Passwords do not match.";
        } else {
            
            $db = new mysqli("Name", "Email", "password", "Confirm Password");

            if ($db->connect_error) {
                die("Connection failed: " . $db->connect_error);
            }

            
            $name = $db->real_escape_string($name);
            $email = $db->real_escape_string($email);
            $password = password_hash($password, PASSWORD_BCRYPT);

            
            $stmt = $db->prepare("INSERT INTO login_data (name, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $name, $email, $password);

            if ($stmt->execute()) {
                echo "Registration successful";
            } else {
                echo "Error: " . $stmt->error;
            }

            $stmt->close();
            $db->close();
        }
    }
}
?>