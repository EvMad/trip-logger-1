import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tripSchema = new Schema ({

    date: {
        // type: Date,
        // default: () => new Date()
        type: String,
        trim: true,
        required: "Enter date of trip"
    },

    country: [
        {
            countryName: {
                type: String,
                trim: true,
                required: "Enter country name"
            },

            region: {
                type: String,
                trim: true,
                required: "Enter region for this date"
            },

            city: {
                type: String,
                trim: true,
                required: "Enter municipality for this date"
            }
        }
    ]

},
{
    toJSON: {
        virtuals: true
    }
}
);

const trip = mongoose.model("Trip", tripSchema);

module.exports = trip;