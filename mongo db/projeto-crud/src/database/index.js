const mongoose = require('mongoose');

function connect() {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/?tls=false');
    const db = mongoose.connection;
    db.once('open', e => {
        console.log('Conectado à database.')
    });

    db.on('error', e => {
        console.error(e);
    });

}

module.exports = {
    connect
}