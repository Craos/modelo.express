import express from "express"
import * as path from "path"
import {fileURLToPath} from "url"
import cookieParser from 'cookie-parser'

import indexRouter from './routes/index.js';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
export default app;
