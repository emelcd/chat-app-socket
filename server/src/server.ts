import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import {Server} from 'socket.io'
import http from 'http';


const app: express.Express = express();

const server = http.createServer(app);


const io = new Server(server);

io.on('connection', (socket) => {
  console.log('New client connected', socket.id);

})

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app;
