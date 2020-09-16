const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Advice = new Schema(
    {
        idea: { type: String, required: true },
        location: { type: String, required: true },
        tag: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('advice', Advice)
