const mongoose = require('mongoose');

// TODO: Fix field 'name' not indexing
const schema = new mongoose.Schema({
    name: { type: String, index: { unique: true } },
    age: Number,
    email: String,
    password: String
});

const Model = mongoose.model('customers', schema);

module.exports = Model;