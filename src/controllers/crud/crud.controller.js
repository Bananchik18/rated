const SchemaController = require('./schema.controller');

module.exports.defineTable = (req, res, callback) => {
    const name_table = req.params['table'];
    const schema = SchemaController.get_schema(res, name_table);

    schema.exec(function (err, items) {
        if (err) return res.send(err);
        if (items.length > 0) {
            items.forEach(function (item) {
                const ModelCrud = require('../../models/crud/crud.model')(item);
                callback(req,res,'',ModelCrud);
            });
        } else {
            res.json({'error':'Table not found'});
        }
    });
}


module.exports.getValue = (req, res, next, Model=false) => {
    if(!Model){
        this.defineTable(req, res, this.getValue);
    }
    if(Model){
        Model.find({},(err, items)=>{
            if(err) res.send(err);
            res.send(items);
        })
    }
}

module.exports.getValueById = (req, res, next, Model=false) => {
    if(!Model){
        this.defineTable(req, res, this.getValueById);
    }
    if(Model){
        Model.findById({_id:req.params['id']},(err, items)=>{
            if(err) res.send(err);
            res.send(items);
        })
    }
}

module.exports.createValue = (req, res, next, Model=false) => {
    if(!Model){
        this.defineTable(req, res, this.createValue);
    }
    if(Model){
        Model.create(req.body,(err)=>{
            if (err){
                res.send(err);
            }
            res.send('Created successfully');
        })
    }


}

module.exports.updateValue = (req, res, next, Model=false) => {
    if(!Model){
        this.defineTable(req, res, this.updateValue);
    }
    if(Model){
        Model.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
            if (err) res.send(err);
            res.send('Updated successfully');
        });
    }
}

module.exports.deleteValue = (req, res, next, Model=false) => {
    if(!Model){
        this.defineTable(req, res, this.deleteValue);
    }
    if(Model){
        Model.findByIdAndRemove(req.params.id, function (err) {
            if (err) res.send(err);
            res.send('Deleted successfully!');
        });
    }
}