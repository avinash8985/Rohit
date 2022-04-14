const express = require('express');
const {json,urlencoded} = require('express');

const userRouter = require('./routers/user');
const coursesRouter = require('./routers/courses');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const auth = require("./middlewares/auth");

dotenv.config();

const app = express();


mongoose.connect(process.env.MONGODB_STRING);

app.use(json());
app.use(urlencoded({extended: false}));
app.use(auth);

app.use('/users',userRouter);
app.use('/courses',coursesRouter);

app.listen(5000);