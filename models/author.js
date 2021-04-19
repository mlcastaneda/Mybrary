const mongoose = require('mongoose');

//schema. table in a normal sequel database
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema);
