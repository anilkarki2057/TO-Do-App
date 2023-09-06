const router = require("express").Router();
const todoController = require("./todo.controller");

// create
router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.creat(req.body);
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();
    res.json({ data: result, mssg: "Success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
