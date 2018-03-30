const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    Title: String,
    Category: String,
    Description: String,
    URL: String
});


module.exports = mongoose.model('Video', videoSchema);
