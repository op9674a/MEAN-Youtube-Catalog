const express = require('express');
const router = express.Router();
const Video = require('../models/videos.js');

// Index
router.get('/',  (req,res) => {
	res.json(videos);
});

//Create
// router.post("/", (req, res)=>{
//     Videos.create(req.body, (err, createdVideo)=> {
//         res.json(createdVideo);
//     });
// });

//Delete
// router.delete("/:id", (req, res)=>{
//     Videos.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
//         res.json(deletedAnimal)
//     });
// });

//Edit
// router.put("/:id", (req, res) => {
//     Videos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedVideo)=>{
//         res.json(updatedVideo);
//     })
// })


module.exports = router;
