const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const commonSchema = require("../common/commonSchema");
const subtaksSchema = new Schema({
  tile: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    required: true,
    default: "Pending",
  },
  todo: { type: ObjectId, ref: "Todo" },
  ...commonSchema,
});

module.exports = model("Subtask", subtaksSchema);
