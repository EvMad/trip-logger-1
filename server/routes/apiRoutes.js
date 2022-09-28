// import express from 'express';
const express = require('express');
// const router = require('express').Router();
const router = express.Router();
// import Trip from '../models/trips';
const Trip = require("../models/trips");

// get
router.get("/api/trips/", (req, res) => {
    Trip([])
    .catch(err => {
        res.json(err);
    });
});

// post

router.post("/api/trips/", ({ body }, res) => {
    Trip.create(body)
    .then(newTrip => {
        res.json(newTrip);
    })
    .catch(err => {
        res.json(err);
    });
});

// put


router.put("/api/trips/:id", ( req, res) => {
    Trip.findByIdAndUpdate(
        { _id: req.params.id }, { $push: { country: req.body } }, { new: true, runValidators: true }
    )
    .then(updateID => {
        res.json(updateId);
    })
    .catch(err => {
        res.json(err);
    });
});

// delete 

router.delete("/api/trips", ({ body }, res) => {
    Trip.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;