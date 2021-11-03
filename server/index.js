const express = require("express");

const app = express();
app.use(express.json({ strict: false }));

const PORT = 4000;

let server = app.listen(PORT, () =>
  console.log(`🚀 Server is starting on ${PORT}`)
);

module.exports = server;
