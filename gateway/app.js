const express = require("express");
const proxy = require("express-http-proxy")
const cors = require("cors")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/customer", proxy("http://localhost:8002")) //customer service
app.use("/shopping", proxy("http://localhost:8003")) //shopping service
app.use("/", proxy("http://localhost:8001")) //product service

app.listen(PORT, () => console.log(`connected to gateway service on port ${PORT}`))