import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import helloController  from "./controllers/hello-controller.js";
import tuitController from './controllers/tuit-controller.js';
import userController   from "./controllers/user-controller.js";
// TODO: How to upload some tweets into the DB by default?
// TODO: Shouldn't the react client be the same? Can I just insert the JSON values into the DB?
mongoose.connect('mongodb://localhost:27017/webdev');

const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitController(app);
app.listen(process.env.PORT || 4000);