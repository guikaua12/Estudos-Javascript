const mongoose = require('mongoose');
const CustomerModel = require('../models/CustomerModel');
const passwordUtils = require('../../utils/password');

async function add(req, res) {
    const {name, age, email, password} = req.body;

    const hashedPassword = await passwordUtils.hash(password);

    const exists = await CustomerModel.exists({email: email}).exec();
    if(exists) {
        res.redirect('/register?success=false&message=E-mail já existente');
        return;
    }

    const model = new CustomerModel({
        name,
        age,
        email,
        password: hashedPassword
    });

    model.save().catch(error => {
        if(!error) return;
        console.error(error);
        res.redirect('/register?success=false&message=Cadastro realizado com sucesso!');
    }).then(model => {
        console.log('Modelo salvo');
        res.redirect('/register?success=true&message=Cadastro realizado com sucesso!');
    });
}



async function get(name) {
    return await CustomerModel.findOne({name: name}).exec();
}

async function getAll() {
    return await CustomerModel.find().exec();
}

module.exports = {
    add,
    get,
    getAll,
}