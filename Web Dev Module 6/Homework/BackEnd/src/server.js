import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import expressSession from "express-session";
import blogAuthorRouter from "./services/blog/authors/index.js";
import blogPostRouter from "./services/blog/posts/index.js";
import { errorHandler } from "./errorHandler.js";
import passport from "passport"
import GooglePassport from "./services/auth/OAuth.js";
import cors from "cors";
const server = express();
const port = 3001;
passport.use("google",GooglePassport)
server.use(express.json());
server.use(passport.initialize());
server.use(expressSession({ secret:"1234"}))
server.use(errorHandler);
server.use(cors())
server.use("/blogAuthor", blogAuthorRouter);
server.use("/blogPosts", blogPostRouter);

//npm i express
//npm i express-list-endpoints
//npm i mongoose
//npm i -D nodemon
//npm i -D dotenv
//add "type": "module", in package.json after main
//add .env file  to root with MONGO_CONNECTION_STRING=mongodb+src://...
//add .gitignore file, add /node_modules & .env
//add "dev": "nodemon -r dotenv/config ./src/server.js" in package.json scripts"

//npm i http-errors
//npm i cors
//npm i express-validator
//npm i query-to-mongo
//npm i multer
//npm i cloudinary
//npm i multer-storage-cloudinary
//npm i @sendgrid/mail
//npm i bcrypt
//npm i jsonwebtoken
//npm i passport
//npm i express-session
//npm i passport-google-oauth20
//npm i node-fetch
//url query:offset = mongo:skip
//start: npm run dev
mongoose.connect(process.env.MONGO_CONNECTION_STRING);
mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("server sez hi");
  });
});
