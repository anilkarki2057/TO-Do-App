const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonSchema");
const subtaksSchema = new Schema({
  tile: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    required: true,
    default: "Pending",
  },
  ...commonSchema,
});

module.exports = model("Subtask", subtaksSchema);
