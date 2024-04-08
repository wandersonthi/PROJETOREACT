const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://wandersonthi:10Demaiovida@cluster0.fz4ytuw.mongodb.net', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo Db conectado com sucesso');
    } catch (error) {
        console.error('Conexão com o mongo db zoada: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
