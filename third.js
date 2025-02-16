// third.js

// Check if the user has visited before

if (!sessionStorage.getItem("visited")) {
    window.location.href = "index.html"; // Redirect back if they refreshed
} else {
    sessionStorage.removeItem("visited"); // Clear the flag to prevent re-entry
}

let button01 = document.getElementById("button01");
let button02 = document.getElementById("button02");

button01.onclick = function() {
    window.location.href = "firstCondition.html";
}

button02.onclick = function() {
    window.location.href = "pinSet.html";
}
