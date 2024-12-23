// Import the 'ws' library for WebSockets
const WebSocket = require('ws');

// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:42069');

// When the connection is open, send the command to turn on the light
ws.onopen = () => {
    console.log('🦍 Connected to Cave Light Controller!');
    // Send the command to turn on the light
    ws.send('TURN_ON_LIGHT');
};

// Listen for the server's response
ws.onmessage = (message) => {
    console.log('🦍 Server response:', message.data);
};

