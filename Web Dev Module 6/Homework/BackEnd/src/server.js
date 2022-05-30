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
server.use(cors({
  origin: (origin, next) => {
    // YOU NEED THIS TO CONNECT YOUR FE TO THIS BE
    console.log("CURRENT ORIGIN: ", origin)

    if (whitelist.indexOf(origin) !== -1) {
      // if origin is in the whitelist --> next
      next(null, true)
    } else {
      // if origin is NOT in the whitelist --> trigger an error
      next(createError(400, `CORS ERROR! Your origin: ${origin} is not in the whitelist!`))
    }
  },
}))
server.use("/blogAuthor", blogAuthorRouter);
server.use("/blogPosts", blogPostRouter);
mongoose.connect(process.env.MONGO_CONNECTION_STRING);
mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("server sez hi");
  });
});
