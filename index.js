const express = require('express')
const app = express()

const routes = require("./routes")
const routesApi = require("./routeApi")
const morgan = require("morgan")

//settings
app.set("appName","mi primer server")
app.set("views",__dirname+"/views")
app.set("view engine","ejs")
//middlewares
app.use(morgan("dev"))

//routes
app.use(routes)
app.use(routesApi)

//
app.listen(3000,()=>{
    console.log("server on 127.0.0.1:3000")
    console.log("name: "+app.get("appName"))
})