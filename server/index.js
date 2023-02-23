const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082 });

wss.on("connection", ws => {
	console.log("New client connected");

	wss.on("close", () => {
		console.log("Client has disconnected!");
	});
});
