const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: [true, "Title is required!"] },
  text: { type: String, required: [true, "Text is required!"] },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("News", newsSchema);
