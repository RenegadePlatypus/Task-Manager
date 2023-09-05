const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
require('dotenv').config()

const port = process.env.PORT || 3000



//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.get('/hello', (req, res)=>{
    res.send("Task Manager App")
})

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`App running on port ${port}...`))

    }
    catch (error) {
        console.log(error)
    }
}

start()