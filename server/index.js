import express, { Router } from 'express';
import dotenv from  'dotenv';

import  Connection  from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js';
import cors from 'cors';


const app = express();

dotenv.config();

app.use(cors());
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running Successfully on PORT ${PORT}`));

DefaultData(); 