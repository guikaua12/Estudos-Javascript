const mongoose = require('mongoose');

// TODO: Fix field 'name' not indexing
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: { type: String, index: { unique: true } },
    password: String
});

const Model = mongoose.model('customers', schema);

module.exports = Model;