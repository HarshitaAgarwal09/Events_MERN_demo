const express = require('express');
const router = express.Router();

const Event = require('../../models/event');
const { model } = require('mongoose');

//@route GET api/events
router.get('/', (req, res) => {
    console.log("reuest!");
    Event
        .find()
        .sort({ date: -1 })
        .then(events => res.status(200).json(events))
        .catch(err => res.status(404).json({ msg: err, success: false }));
})

//@route post api/events
router.post('/', (req, res) => {
    const newEvent = new Event({
        event_name: req.body.event_name,
        event_type: req.body.event_type,
        organiser_name: req.body.organiser_name,
        organiser_id: req.body.organiser_id,
        location: req.body.location,
        event_description: req.body.event_description
    });

    newEvent
        .save()
        .then(event => res.status(201).json({ msg: "Event saved!!" }))
        .catch(err => res.status(500).json({ msg: err }));
})

//@route delete api/events
router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(note =>
            note.remove()
                .then(() => res.status(200).json({ msg: "Event deleted!!", success: true }))
                .catch(err => res.status(500).json({ msg: err, success: false }))
        )
        .catch(err => res.status(404).json({ msg: err, success: false }))
})


module.exports = router;