const express = require("express");
const router = express.Router();

const keys = require("../../config/keys");

//Load User models
const Comment = require("../../models/Comment");

//posting comments
router.post("/", (req, res) => {
  const newComment = new Comment({
    username: req.body.username,
    comment: req.body.comment,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
  });

  newComment.save().then((comment) => res.json(comment));
});

//getting comments
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) =>
      res.status(404).json({ nocommentfount: "No comment found with that ID" })
    );
});

//getting comments by id
router.get("/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) =>
      res.status(404).json({ nocommentfount: "No comment found with that ID" })
    );
});

//manipulating upvotes of the comments

router.put("/upvotes/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      comment.upvotes = comment.upvotes + 1;
      comment.save().then((comment) => res.json(comment));
    })
    .catch((err) =>
      res.status(404).json({ commentnotfound: "No comment found" })
    );
});

//manipulating downvotes of the comments
router.put("/downvotes/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      comment.downvotes = comment.downvotes + 1;
      comment.save().then((comment) => res.json(comment));
    })
    .catch((err) =>
      res.status(404).json({ commentnotfound: "No comment found" })
    );
});
module.exports = router;
