const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const CommentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: false,
  },
  downvotes: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
