const express = require('express');
const videos = express.Router();
const Video = require('../models/videos.js');

// Index
videos.get('/',  (req,res) => {
	res.json(videos);
});


module.exports = videos;
