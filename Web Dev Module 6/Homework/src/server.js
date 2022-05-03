import express from "express"
import listEndpoints from "express-list-endpoints"
import mongoose from "mongoose"
import blogAuthorRouter from "./services/blog/authors/index.js"

const server = express()
const port = 3001
server.use(express.json())
server.use("/blogAuthor", blogAuthorRouter)
//npm i express
//npm i express-list-endpoints
//npm i mongoose
//npm i -D nodemon
//npm i -D dotenv
//add "type": "module", in package.json after main
//add .env file  to root with MONGO_CONNECTION_STRING=mongodb+src://...
//add .gitignore file, add /node_modules & .env
//add "dev": "nodemon -r dotenv/config ./src/server.js" in package.json scripts"
//start: npm run dev
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
mongoose.connection.on("connected",() => {
    server.listen(port,() => {
        console.table(listEndpoints(server))
        console.log('server sez hi')
    })
})
