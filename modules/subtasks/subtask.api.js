const router = require("express").Router();
const subtaskController = require("./subtask.controller");

// create
router.post("/", async (req, res, next) => {
  try {
    const result = await subtaskController.create(req.body);
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});

//list
router.get("/", async (req, res, next) => {
  try {
    const result = await subtaskController.list();
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});
//getById
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await subtaskController.getById();
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});
//updateById
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await subtaskController.upDateById(id, req.body);
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});
//removeById
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await subtaskController.removeById(id);
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
