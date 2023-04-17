const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(express.json())
app.use("/", (req,res) => {
    res.status(200).send("Hello from product service")
})

app.listen(PORT, () => console.log(`connected to product service on port ${PORT}`))