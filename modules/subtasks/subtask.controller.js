const model = require("./subtask.model");
const creat = async (payload) => {
  return await model.create(payload);
};
const list = async () => {
  return await model.find();
};
const getById = async (id) => {
  return await model.findOne({ _id: id });
};
const upadae = async (id, payload) => {
  return await model.findOneAndUpdate({ _id: id }, payload, { new: true });
};
const removeById = async (id) => {
  return await model.deletOne({ _id: id });
};
const updateStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("Status is required");
  return await model.findOneAndUpdate({ _id: id }, { status }, { new: true });
};
module.exports = { creat, list, getById, upadae, removeById, updateStatus };
