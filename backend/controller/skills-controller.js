const Skill = require("../models/skills-model");
const HttpError = require("../models/http-error");
const {
  valErrorCheck,
  adminKeyCheck,
} = require("../util/controllerErrorCheck");

const getSkills = async (req, res, next) => {
  let skills;
  try {
    skills = await Skill.find();
  } catch (err) {
    const error = new HttpError("Fetching skills failed", 500);
    return next(error);
  }

  res.json({
    skills: skills.map((skill) => skill.toObject({ getters: true })),
  });
};

const createSkills = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const { catagory, name, iconName, iconConfig } = req.body;

  const createdSkill = new Skill({
    catagory,
    name,
    iconName,
    iconConfig: iconConfig || "",
  });

  try {
    const saveSkill = await createdSkill.save();
    res.status(201).json(saveSkill);
  } catch (err) {
    const error = new HttpError(
      "Creating new skill failed, please try again later",
      500
    );
    return next(error);
  }
};

const updateSkill = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const userId = req.params.uid;

  const { iconName, iconConfig } = req.body;

  let skill;
  try {
    skill = await Skill.findById(userId);
  } catch (err) {
    const error = new HttpError("No skill for that skill id", 500);
    return next(error);
  }

  skill.iconName = iconName;
  skill.iconConfig = iconConfig;

  try {
    await skill.save();
  } catch (err) {
    const error = new HttpError("Can't update skill", 500);
    return next(error);
  }

  res.status(200).json({ skill: skill.toObject({ gatters: true }) });
};

const deleteSkill = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const userId = req.params.uid;

  try {
    const deletedSkill = await Skill.deleteOne({ _id: userId });
    if (deletedSkill.deletedCount === 0) {
      const error = new HttpError("No skill for that skill id", 500);
      return next(error);
    }
    res.status(200).json({ message: "Successfully delete Skill" });
  } catch (err) {
    const error = new HttpError(
      "Deleting skill failed, please try again later",
      500
    );
    return next(error);
  }
};

exports.getSkills = getSkills;
exports.createSkills = createSkills;
exports.updateSkill = updateSkill;
exports.deleteSkill = deleteSkill;
