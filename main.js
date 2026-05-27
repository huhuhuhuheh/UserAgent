const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.type("text").send(req.headers["user-agent"] || "no user agent")
})

module.exports = app
