const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  catagory: { type: String, required: true },
  name: { type: String, required: true },
  iconName: { type: String, required: true },
  iconConfig: { type: String },
});

skillSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Skill", skillSchema);
