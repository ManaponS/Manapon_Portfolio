const express = require("express");
const { check } = require("express-validator");

const projectController = require("../controller/projects-controller");

const router = express.Router();

router.get("/", projectController.getProjects);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("description").not().isEmpty(),
    check("image").not().isEmpty(),
    check("link").not().isEmpty(),
  ],
  projectController.createProjects
);

router.patch(
  "/:pid",
  [
    check("name").not().exists(),
    check("description").not().isEmpty(),
    check("image").not().isEmpty(),
    check("link").not().isEmpty(),
  ],
  projectController.updateProject
);

router.delete("/:pid", projectController.deleteProject);

module.exports = router;
