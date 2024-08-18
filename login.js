document.addEventListener("DOMContentLoaded", function() {
    const captchaText = generateCaptcha();
    drawCaptcha(captchaText);

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const enteredCaptcha = document.getElementById('captcha').value;

        if (enteredCaptcha !== captchaText) {
            document.getElementById('error-msg').textContent = 'Incorrect CAPTCHA, please try again.';
        } else if (username === "" || password === "") {
            document.getElementById('error-msg').textContent = 'Username or Password cannot be empty.';
        } else if (username !== "admin" || password !== "password123") {
            document.getElementById('error-msg').textContent = 'Invalid Username or Password.';
        } else {
            document.getElementById('error-msg').textContent = '';
            // Proceed with form submission or any other logic
            window.location.href = "dashboard.html";
        }
    });
});

function generateCaptcha() {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = [];
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    return captcha.join('');
}

function drawCaptcha(captchaText) {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 150;
    canvas.height = 50;
    ctx.font = '30px Arial';
    ctx.fillStyle = '#4CAF50';
    ctx.textBaseline = 'middle';
    ctx.fillText(captchaText, 10, 25);
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const showPasswordIcon = document.getElementById('showPassword');
    const hidePasswordIcon = document.getElementById('hidePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.style.display = 'none';
        hidePasswordIcon.style.display = 'inline';
    } else {
        passwordInput.type = 'password';
        showPasswordIcon.style.display = 'inline';
        hidePasswordIcon.style.display = 'none';
    }
}
