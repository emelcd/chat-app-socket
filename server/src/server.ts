import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { Server } from "socket.io";
import http from "http";
import './configs/db.config'
import apiRouter from "./routes";

const app: express.Express = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);
  socket
    .on("send-message", (data) => {
      console.log("Message received", data);
    })
});

app.use('/api', apiRouter)

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default server;
