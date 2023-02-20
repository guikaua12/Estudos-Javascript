const mongoose = require('mongoose');
const CustomerModel = require('../models/CustomerModel');
const passwordUtils = require('../../utils/password');

async function add(req, res) {
    const {name, age, email, password} = req.body;

    const hashedPassword = await passwordUtils.hash(password);

    const model = new CustomerModel({
        name,
        age,
        email,
        password: hashedPassword
    });
    model.save().then(model => {
        console.log('Modelo salvo');
    });

    res.end();
}

async function get(name) {
    return await CustomerModel.findOne({name: name}).exec();
}

module.exports = {
    add,
    get
}