const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 42069 });

wss.on('connection', (ws) => {
    console.log('🦍 A new ape has entered the chat!');
    
    ws.on('message', (message) => {
        console.log(`🦍 Message received: ${message}`);
        
        // Broadcast the message to all connected apes
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('🦍 An ape has left the chat!');
    });
});

console.log('🦍 WebSocket server running on ws://localhost:42069');
