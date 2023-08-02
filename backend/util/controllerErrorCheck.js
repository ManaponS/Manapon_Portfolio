const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

function valErrorCheck(req) {
  const valError = validationResult(req);

  if (!valError.isEmpty()) {
    const error = new HttpError("Invalid inputs passed", 422);
    return error;
  }
}

function adminKeyCheck(adminKey) {
  if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
    const error = new HttpError("Invalid admin key", 422);
    return error;
  }
}

module.exports = { valErrorCheck, adminKeyCheck };
