const express = require('express');
const router = express.Router();
const Videos = require('../models/videos.js');

// Index
router.get('/',  (req,res) => {
	Videos.find({}, (err, foundVideos)=>{
		res.json(foundVideos);
	});
});

// Create
router.post('/', (req, res)=>{
    Videos.create(req.body, (err, createdVideo)=> {
        res.json(createdVideo);
    });
});

// Delete
router.delete("/:id", (req, res)=>{
    Videos.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
        res.json(deletedVideo)
    });
});

//Edit
router.put("/:id", (req, res) => {
    Videos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVideo)=>{
        res.json(updatedVideo);
    })
})


module.exports = router;
