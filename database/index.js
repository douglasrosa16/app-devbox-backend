const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodedexbov', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.expres = mongoose;