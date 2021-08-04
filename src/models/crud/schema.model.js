//создать апи для schema чтобы тянуть и делать таблицы для круда

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaModel = new Schema({
    name: {
        type: String,
        required: true
    },
    structure: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('schemas', SchemaModel);