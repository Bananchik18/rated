module.exports = ()=>{
    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const db_config = require('../config/db');

    const app = express();

    const crud_route = require('./routes/crud/crud.router');
    const schema_route = require('./routes/crud/schema.router');

    const mongoose = require('mongoose');
    const mongoDB = process.env.MONGODB_URI || db_config.url;
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cors());

    app.use('/', schema_route);
    app.use('/', crud_route);

    let port = 3000;
    app.listen(port, () => {
        console.log('Server is running on port ' + port)
    });
}

