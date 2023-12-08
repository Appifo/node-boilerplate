import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();
const server = createServer(app);
const io = new Server(server);
const baseUrl = process.env.APP_URL || 'http://localhost';
const port = process.env.PORT || 4000;

// Middlewre.....
app.use(express.json());

// Sockets.....
io.on("connection", (socket) => {
  console.log("a user connected");
});

// Connect Database....
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    // Routing.....
    console.log("Database Connected Successfully");
    routes(app);
    
    // Listening for requests.....
    server.listen(port, () => {
      console.log(`server running at ${baseUrl}:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
