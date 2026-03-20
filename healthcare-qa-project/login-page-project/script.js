let currentRole = "patient";

function switchRole(role) {
    currentRole = role;

    const title = document.getElementById("portal-title");
    const subtitle = document.getElementById("portal-subtitle");
    const usernameInput = document.getElementById("username");

    if(role === "patient") {
        title.innerText = "Patient Portal";
        subtitle.innerText = "Access Your Health Records";
        usernameInput.placeholder = "Patient Username";
    } else {
        title.innerText = "Admin Portal";
        subtitle.innerText = "Staff Access Portal";
        usernameInput.placeholder = "Admin Username";
    }

    document.getElementById("error-msg").innerText = "";
}

function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("error-msg");

    if(username === "" || password === "") {
        errorMsg.innerText = "All fields are required";
        return;
    }

    // Patient login
    if(currentRole === "patient") {
        if(username === "patient1" && password === "health123") {
            alert("Patient Login Successful");
        } else {
            errorMsg.innerText = "Invalid Patient Credentials";
        }
    }

    // Admin login
    if(currentRole === "admin") {
        if(username === "admin" && password === "admin123") {
            alert("Admin Login Successful");
        } else {
            errorMsg.innerText = "Invalid Admin Credentials";
        }
    }
}