const express = require('express');
const router = express.Router();

const Event = require('../../models/event');
const { model } = require('mongoose');

//@route GET api/notes
//@desc get all notes
//@access Public
router.get('/', (req, res) => {
    Note
        .find()
        .sort({ date: -1 })
        .then(notes => res.status(200).json(notes))
        .catch(err => res.status(404).json({ msg: err, success: false }));
})

//@route post api/notes
//@desc post a note
//@access Public
router.post('/', (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        text: req.body.text
    });

    newEvent
        .save()
        .then(note => res.status(201).json({ msg: "Event saved!!" }))
        .catch(err => res.status(500).json({ msg: err }));
})

//@route delete api/notes
//@desc delete a note
//@access Public
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