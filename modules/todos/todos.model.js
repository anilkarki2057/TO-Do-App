const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  tile: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    required: true,
    default: "Pending",
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model("Todo", todoSchema);
