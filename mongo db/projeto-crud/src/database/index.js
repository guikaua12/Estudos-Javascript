const mongoose = require('mongoose');

const database = {
    connection: undefined,
    connect: async function() {
        mongoose.set('strictQuery', false);
        this.connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/caralho?tls=false');
        this.connection.once('open', e => {
            console.log('Conectado à database.')
        });

        this.connection.on('error', e => {
            console.error(e);
        });

    }
}



module.exports = database;