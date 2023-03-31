const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  userName: String,
  title: String,
  createdAt: Date,
  heading: String,
  image: String,
});

module.exports = mongoose.model("Post", postSchema);
