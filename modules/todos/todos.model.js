const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonSchema");
const todoSchema = new Schema({
  tile: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    required: true,
    default: "Pending",
  },
  ...commonSchema,
});

module.exports = model("Todo", todoSchema);
