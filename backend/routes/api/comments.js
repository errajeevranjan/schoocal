const express = require("express");
const router = express.Router();

const keys = require("../../config/keys");

//Load User models
const Comment = require("../../models/Comment");

//registering user
router.post("/postcomment", (req, res) => {
  //posting comments
  const newComment = new Comment({
    comment: req.body.comment,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
  });

  newComment.save().then((comment) => res.json(comment));
});

router.post("/getcomment", (req, res) => {
  //getting comments
});

module.exports = router;
