import express from "express";
import createError from "http-errors";
import blogPostModel from "./model.js";
import { checkBlogPost, checkValidationResult } from "./validation.js";

const blogPosts = express.Router();
//insert
//create
//post
blogPosts.post(
  "/",
  checkBlogPost,
  checkValidationResult,
  async (req, res, next) => {
    try {
      const newblogPost = new blogPostModel(req.body);
      const savedblogPost = await newblogPost.save();
      res.send(savedblogPost);
    } catch (error) {
      next(error);
    }
  }
);

//select
//read
//get
blogPosts.get("/", async (req, res, next) => {
  try {
    const blogPosts = await blogPostModel.find();
    res.send(blogPosts);
  } catch (error) {
    next(error);
  }
});

//select where
//read
//get
blogPosts.get("/:id", async (req, res, next) => {
  console.log(req.params);
  try {
    const blogPost = await blogPostModel.findById({ _id: req.params.id });
    if (blogPost) {
      res.send(blogPost);
    } else {
      next(createError(404, `Blog post (${req.params.id}) not found`));
    }
  } catch (error) {
    next(error);
  }
});

//update
//put
blogPosts.put(
  "/:id",
  checkBlogPost,
  checkValidationResult,
  async (req, res, next) => {
    try {
      const blogPost = await blogPostModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (blogPost) {
        res.send(blogPost);
      } else {
        next(createError(404, `Blog post (${req.params.userId}) not found`));
      }
      res.send(blogPost);
    } catch (error) {
      next(error);
    }
  }
);

//delete
blogPosts.delete("/:id", async (req, res, next) => {
  try {
    const blogPost = await blogPostModel.findByIdAndDelete(req.params.id);
    if (blogPost) {
      res.status(204).send();
    } else {
      next(createError(404, `Blog post (${req.params.userId}) not found`));
    }
  } catch (error) {
    next(error);
  }
});

export default blogPosts;
