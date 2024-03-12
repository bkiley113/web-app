import { config } from 'dotenv';
import { executeUserCrudOperations } from './usersCrud.js';
import http from 'http';
import { app } from '../middleware/app.js';

const port = process.env.PORT || 3001

const server = http.createServer(app);

server.listen(port)


config();
//await executeUserCrudOperations();
