// Update time function
function updateDateTime() {
    const now = new Date();
    
    // Format date and time to YYYY-MM-DD HH:MM:SS
    const formatted = now.getUTCFullYear() + '-' + 
                     String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
                     String(now.getUTCDate()).padStart(2, '0') + ' ' +
                     String(now.getUTCHours()).padStart(2, '0') + ':' +
                     String(now.getUTCMinutes()).padStart(2, '0') + ':' +
                     String(now.getUTCSeconds()).padStart(2, '0');
    
    document.getElementById('current-time').textContent = formatted;
}

// Initialize clock and update every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Obfuscated login credentials
const _0x5f4d=['\x41\x64\x6d\x69\x6e','\x4f\x66\x66\x69\x63\x69\x61\x6c\x74\x7a\x49\x63\x65\x4d\x43\x31\x30\x33\x30\x33\x30\x31'];

// Login form handler
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username === _0x5f4d[0] && password === _0x5f4d[1]) {
        // Set authentication in session storage
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('username', 'RandomTechrate');
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
    } else {
        // Show error message
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        
        // Hide error message after 3 seconds
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
});

// Check if user is already authenticated
function checkAuth() {
    if (!sessionStorage.getItem('authenticated')) {
        if (window.location.pathname !== '/') {
            window.location.href = '/';
        }
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('username');
    window.location.href = '/';
}

// Initialize authentication check
document.addEventListener('DOMContentLoaded', checkAuth);
