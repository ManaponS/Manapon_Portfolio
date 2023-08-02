const Project = require("../models/projects-model");
const HttpError = require("../models/http-error");
const {
  valErrorCheck,
  adminKeyCheck,
} = require("../util/controllerErrorCheck");

const getProjects = async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find().populate("useSkills");
  } catch (err) {
    const error = new HttpError("Fetching projects failed", 500);
    return next(error);
  }

  res.json({
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
};

const createProjects = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const { name, description, image, link, useSkills } = req.body;

  const createdProject = new Project({
    name,
    description,
    image,
    link,
    useSkills,
  });

  try {
    const saveProject = await createdProject.save();
    res.status(201).json(saveProject);
  } catch (err) {
    const error = new HttpError(
      "Creating new project failed, please try again later",
      500
    );
    return next(error);
  }
};

const updateProject = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const projectId = req.params.pid;

  const { description, image, link } = req.body;

  let project;
  try {
    project = await Project.findById(projectId);
  } catch (err) {
    const error = new HttpError("No project for that project id", 500);
    return next(error);
  }
  project.description = description;
  project.image = image;
  project.link = link;

  try {
    await project.save();
  } catch (err) {
    const error = new HttpError("Can't update project", 500);
    return next(error);
  }
  res.status(200).json({ project: project.toObject({ getters: true }) });
};

const deleteProject = async (req, res, next) => {
  const valErr = valErrorCheck(req);
  if (valErr) {
    return next(valErr);
  }

  const adminKeyErr = adminKeyCheck(req.headers["adminkey"]);
  if (adminKeyErr) {
    return next(adminKeyErr);
  }

  const projectId = req.params.pid;

  try {
    const deletedProject = await Project.deleteOne({ _id: projectId });
    if (deletedProject.deletedCount === 0) {
      const error = new HttpError("No project for that project id", 500);
      return next(error);
    }
    res.status(200).json({ message: "Successfully delete Project" });
  } catch (err) {
    const error = new HttpError(
      "Deleting project failed, please try again later",
      500
    );
    return next(error);
  }
};

exports.getProjects = getProjects;
exports.createProjects = createProjects;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;
