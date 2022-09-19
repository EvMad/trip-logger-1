// const express = require('express');
import express from 'express';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const logger = require("morgan");
import morgan from 'morgan';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//connect mongoose here
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/trip-logger', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(require("./server/routes/apiRoutes"));
app.use(require("./server/routes/htmlRoutes"));
