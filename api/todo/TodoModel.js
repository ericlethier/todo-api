import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Todo = new Schema({
  description: String,
  completed: Boolean,
});

export default mongoose.model("Todo", Todo);
