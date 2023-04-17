const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json())
app.use("/", (req,res) => {
    res.status(200).send("Hello from shopping service")
})

app.listen(PORT, () => console.log(`connected to shopping service on port ${PORT}`))