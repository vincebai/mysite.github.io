var attempts = 5;

function openLogin() {
    this.location.href = "login.html";
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Hardcoded username and password for testing
    if (username.toLowerCase() === "snowdonut" && password === "supervince") {
        window.alert("Welcome, SnowDonut");
        // window.location = ___.html
        return false;
    }
    else {
        attempts--;
        if (attempts == 0) {
            document.getElementById("username").disabled;
            document.getElementById("password").disabled;
            document.getElementById("submit").disabled;
        }
        window.alert("failed");
        return false;
    }

}
