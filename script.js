document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        if (sessionStorage.getItem("attempts") >= 3) {
            if (confirm("Would you like a hint?")) {
                alert("Is the samurai a lion tamer?!");
            }
        }
    }
}

function failedAttempt() {
    if (sessionStorage.getItem("attempts") == null) {
        sessionStorage.setItem("attempts", 1);
    }
    else {
        var attempts = sessionStorage.getItem("attempts");
        attempts++;
        sessionStorage.setItem("attempts", attempts);
    }
    console.log(sessionStorage.getItem("attempts"));
}

function correctAttempt() {
    sessionStorage.removeItem("attempts");
}