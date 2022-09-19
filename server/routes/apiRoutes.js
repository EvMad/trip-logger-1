import express from 'express';
const router = express.Router();
import Trip from '../models/trips';

// get
router.get("/api/trips", (req, res) => {
    Trip([])
    .catch(err => {
        res.json(err);
    });
});

// post

router.post("/api/trips", ({ body }, res) => {
    Trip.create(body)
    .then(newTrip => {
        res.json(newTrip);
    })
    .catch(err => {
        res.json(err);
    });
});