import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tripSchema = new Schema ({});

const trip = mongoose.model("Trip", tripSchema);

module.exports = trip;