// const express = require('express');
import express from 'express';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const logger = require("morgan");
import morgan from 'morgan';

require('dotenv').config();

const PORT = process.env.PORT || 3000;
