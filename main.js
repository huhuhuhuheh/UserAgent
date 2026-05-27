const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.type("text/plain")
    res.send(req.headers["user-agent"] || "no user agent")
})

app.listen(3000, () => {
    console.log("Running")
})