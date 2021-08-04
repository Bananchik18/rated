const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (params) => {
    Object.keys(mongoose.connection.models).forEach(key => {
        if (params.name == key) {
            delete mongoose.connection.models[key];
        }
    });

    const tempSchema = new Schema(eval("(" + params.structure + ")"),{collection:params.name});
    const NewModel = mongoose.model(params.name, tempSchema);
    return NewModel;
}