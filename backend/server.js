const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

const httpServer = http.createServer(app);
const PORT = 4000;

const io = new Server(httpServer)

app.get("/api/v1/", (req, res) => {
  res.send("hello");
});

httpServer.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
