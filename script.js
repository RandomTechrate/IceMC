// Update time function
function updateDateTime() {
    const now = new Date();
    const formatted = now.getUTCFullYear() + '-' + 
                     String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                     String(now.getUTCDate()).padStart(2, '0') + ' ' +
                     String(now.getUTCHours()).padStart(2, '0') + ':' +
                     String(now.getUTCMinutes()).padStart(2, '0') + ':' +
                     String(now.getUTCSeconds()).padStart(2, '0');
    
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = formatted;
    }
}

// Initialize clock and update every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Obfuscated login credentials
const _0x5f4d=['\x41\x64\x6d\x69\x6e','\x4f\x66\x66\x69\x63\x69\x61\x6c\x74\x7a\x49\x63\x65\x4d\x43\x31\x30\x33\x30\x33\x30\x31'];

// Login form handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === _0x5f4d[0] && password === _0x5f4d[1]) {
            sessionStorage.setItem('authenticated', 'true');
            window.location.href = 'dashboard.html';
        } else {
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });
}

// Check authentication
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        if (!window.location.href.includes('index.html')) {
            window.location.href = 'index.html';
        }
    }
}

// Console functionality
function toggleConsole() {
    const console = document.getElementById('console');
    if (console) {
        console.style.display = console.style.display === 'none' ? 'block' : 'none';
    }
}

const consoleInput = document.getElementById('console-input');
const consoleOutput = document.getElementById('console-output');

if (consoleInput && consoleOutput) {
    consoleInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value;
            executeCommand(command);
            this.value = '';
        }
    });
}

function executeCommand(command) {
    appendToConsole(`> ${command}`);
    
    // Here you'll implement the connection to your plugin's command endpoint
    fetch('/command', {
        method: 'POST',
        body: command
    })
    .then(response => response.text())
    .then(result => {
        appendToConsole(result);
    })
    .catch(error => {
        appendToConsole(`Error: ${error}`);
    });
}

function appendToConsole(text) {
    if (consoleOutput) {
        consoleOutput.innerHTML += text + '<br>';
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'index.html';
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', checkAuth);
