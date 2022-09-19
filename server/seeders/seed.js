import mongoose from 'mongoose';
import Trip from '../models/trips';

mongoose.connect('mongodb://localhost/trip-logger', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const tripSeed = [
    {
        date: '9/1/2022',
        country: [
          {
            countryName: 'Italy',
            region: 'Tuscany',
            city: 'Florence',
          },
        ],
    },

]

// Trip.deleteMany({}).then