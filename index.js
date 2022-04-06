require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 3000
const { MONGODB_HOST, MONGODB_NAME } = process.env

//mongoDB Connection
mongoose.connect(`${MONGODB_HOST}/${MONGODB_NAME}`, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('success connect to DB'))
    .catch((err) => console.log(`failed connect to DB : ${err}`))

//set parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//set routes
app.use('/api/member', require('./routes/api/member'))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
