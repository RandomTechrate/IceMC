/* filepath: /C:/Users/negar/OneDrive/Documents/js/main.js */
// Player count update
function updatePlayerCount() {
    // Add your server status API call here
    console.log('Updating player count...');
}

// Copy IP address
document.querySelector('.server-ip').addEventListener('click', function() {
    navigator.clipboard.writeText('thebgminecraft.xyz');
    alert('Server IP copied to clipboard!');
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updatePlayerCount();
    // Add more initialization code here
});