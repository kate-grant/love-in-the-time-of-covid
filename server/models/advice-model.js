const mongoose = require('mongoose')
const Schema = mongoose.Schema

console.log("7");
const Advice = new Schema(
    {
        idea: { type: String, required: true },
        location: { type: String, required: true },
        tag: { type: String, required: true },
    },
    { timestamps: true },
)
console.log("8");
module.exports = mongoose.model('advice', Advice)
