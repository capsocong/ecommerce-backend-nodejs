const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
// morgan('combined')
// morgan('common')
// morgan('short')
// morgan('tiny')
// init db

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello World!";
  return res.status(200).json({
    message: "Welcome to WSV eCommerce API",
    metadata: strCompress.repeat(100000),
  });
});
// handling error

module.exports = app;
