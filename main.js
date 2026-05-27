const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send(req.headers["user-agent"] || "no user agent")
})

module.exports = app
