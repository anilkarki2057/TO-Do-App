const subtaskModel = require("../subtasks/subtask.model");
const TodoModel = require("./todos.model");
const create = (payload) => {
  return TodoModel.create(payload);
};
const list = async () => {
  const todo = await TodoModel.find();
  const subtasks = await subtaskModel.find();
  const combinedTodo = todos.map((todo) =>
    subtasks.find((subtasks) => subtasks.todo === todo._id)
  );
};
module.exports = { create, list };
