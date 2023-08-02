const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const skillsRoutes = require("./routes/skills-routes");
const projectsRoutes = require("./routes/projects-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join("public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/skills", skillsRoutes);
app.use("/api/projects", projectsRoutes);

app.use((req, res, next) => {
  throw new HttpError("Route not found", 404);
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.a6pcqef.mongodb.net/${process.env.DB_NAME}`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
