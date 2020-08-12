const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    event_name: {
        type: String,
        required: true
    },

    organiser_name: {
        type: String,
        required: true
    },

    organiser_id: {
        type: String,
        required: true,
        unique: true
    },

    event_description: {
        type: String,
        required: true
    },

    event_type: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true
    },

    create_time: {
        type: Date,
        default: Date.now
    },

    close_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = Event = mongoose.model("events", EventSchema);