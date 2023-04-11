const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
// const userRoutes = require('./routes/v1/user.route')
let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

// app.use('/v1/users',userRoutes)

mongoose.connect(config.mongoose.url,config.mongoose.options)
.then(()=>{
    console.log('Connected to Database successfully')
    try{
        app.listen(config.port)
        console.log('Server Running on '+ config.port)
    }catch(err){
        console.log('Failed to start the server')
    }
}).catch((err)=>{
    console.log(`Failed to connect to database`)
})



