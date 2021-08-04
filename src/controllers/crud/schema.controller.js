const Model = require('../../models/crud/schema.model');
const mongoose = require('mongoose');

module.exports.get_schema = (res,schema) => {
    if(schema){
        return Model.find({'name':schema},(err, items)=>{
        })
    }else{
       Model.find({},(err, items)=>{
            res.send(items);
        })
    }

}

module.exports.create_schema = (req, res, next) => {
    Model.create({
        structure: req.body.structure,
        name: req.body.name
    },(err)=>{
        if (err) return next(err);
        res.send('Schema created successfully!');
    })
}
module.exports.update_schema = (req, res, next) => {
    Model.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, item) {
        if (err) return next(err);
        res.send('Schema update');
    });
}

module.exports.delete_schema = (req, res, next) => {
    Model.findById(req.params.id,function (err, items){
        if(err) res.send(err);
        mongoose.connection.db.dropCollection(items.name, function(err, result) {});
    })
    Model.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted ok');
    });

}
