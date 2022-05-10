import express from "express";
import createError from "http-errors";
import blogPostModel from "./model.js";
import { checkBlogPost, checkValidationResult } from "./validation.js";
import q2m from "query-to-mongo"
const blogPosts = express.Router();
//insert
//create
//post
blogPosts.post(
  "/",
  checkBlogPost,
  checkValidationResult,
  async (req, res, next) => {
    console.log(req)
    try {
      console.log(req)
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
    //localhost:3001/blogposts?category=category&limit=2&fields=cover,title
    const query = q2m(req.query)
    if (!query.options.skip) query.options.skip = 0
    if (!query.options.limit || query.options.limit > 10) query.options.limit = 20   
    const total = await blogPostModel.countDocuments(query.criteria)
    const blogPosts = await blogPostModel.find(query.criteria, query.options.fields).skip(query.options.skip).limit(query.options.limit).sort(query.options.sort);
    res.send({
      links: query.links(`/`, total),
      total,
      totalPages: Math.ceil(total / query.options.limit),
      blogPosts});
  } catch (error) {
    next(error);
  }
});

//select where
//read
//get
blogPosts.get("/:id", async (req, res, next) => {
//localhost:3001/blogposts/62743ef73c93c8f345d5b84d/?fields=cover,title
  try {
    const blogPost = await blogPostModel.findById({_id: req.params.id},q2m(req.query).options.fields);
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
