const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: [{ type: String, require: true }],
  link: { type: String, require: true },
  useSkills: [{ type: mongoose.Types.ObjectId, require: true, ref: "Skill" }],
});
projectSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Project", projectSchema);
