const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    url: String,
    thumb: String
});

const Videos = mongoose.model('Video', videoSchema);

module.exports = Videos;
