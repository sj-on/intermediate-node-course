const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env'})
const app = express()
const PORT = process.env.PORT || 80;
app.listen(PORT, console.log(`Running a ${process.env.ENV} server on ${PORT}`))