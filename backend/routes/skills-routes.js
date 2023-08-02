const express = require("express");
const { check } = require("express-validator");

const skillsController = require("../controller/skills-controller");

const router = express.Router();

router.get("/", skillsController.getSkills);

router.post(
  "/",
  [
    check("catagory").not().isEmpty(),
    check("name").not().isEmpty(),
    check("iconName").not().isEmpty(),
  ],
  skillsController.createSkills
);

router.patch(
  "/:uid",
  [
    check("name").not().exists(),
    check("catagory").not().exists(),
    check("iconName").not().isEmpty(),
  ],
  skillsController.updateSkill
);

router.delete("/:uid", skillsController.deleteSkill);

module.exports = router;
