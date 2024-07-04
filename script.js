document.addEventListener("DOMContentLoaded", function() {
    var welcomeMessage = "Welcome to my Portfolio!";
    var messageElement = document.getElementById("welcome-message");

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            messageElement.textContent += text.charAt(i);
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 50); // Adjust typing speed here (50ms is fast)
        } else {
            fnCallback();
        }
    }

    function startTyping() {
        typeWriter(welcomeMessage, 0, function() {
            // Optional callback function when typing completes
        });
    }

    startTyping();
});
