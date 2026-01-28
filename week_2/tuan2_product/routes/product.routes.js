const express = require("express");
const router = express.Router();
const upload = require("../upload");
const controller = require("../controllers/product.controller");

router.get("/", controller.getAll);

router.get("/add", (req, res) => res.render("add"));
router.post("/add", upload.single("image"), controller.create);

// 🔥 EDIT
router.get("/edit/:id", controller.editForm);
router.post("/edit/:id", controller.update);

router.get("/delete/:id", controller.delete);

module.exports = router;
