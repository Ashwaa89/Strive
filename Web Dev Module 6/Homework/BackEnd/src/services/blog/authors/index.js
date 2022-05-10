import express from "express";
import createError from "http-errors";
import blogAuthorsModel from "./model.js";
import { checkBlogAuthor, checkValidationResult } from "./validation.js";
import q2m from "query-to-mongo"
const blogAuthors = express.Router();
//insert
//create
//post
blogAuthors.post(
  "/",
  checkBlogAuthor,
  checkValidationResult,
  async (req, res, next) => {
    try {
      const newblogAuthor = new blogAuthorsModel(req.body);
      const savedblogAuthor = await newblogAuthor.save();
      res.send(savedblogAuthor);
    } catch (error) {
      next(error);
    }
  }
);

//select
//read
//get
blogAuthors.get("/", async (req, res, next) => {
  //localhost:3001/blogauthor?fields=name,surname
  try {
    const query = q2m(req.query)
    console.log(query)
    if (!query.options.skip) query.options.skip = 0
    if (!query.options.limit || query.options.limit > 10) query.options.limit = 20   
    const total = await blogAuthorsModel.countDocuments(query.criteria)
    const blogAuthors = await blogAuthorsModel.find(query.criteria, query.options.fields).skip(query.options.skip).limit(query.options.limit).sort(query.options.sort);
    res.send({
      links: query.links(`${process.env.URL}/blogposts`, total),
      total,
      totalPages: Math.ceil(total / query.options.limit),
      blogAuthors});
   } catch (error) {
    next(error);
  }
});

//select where
//read
//get
blogAuthors.get("/:id", async (req, res, next) => {
  //localhost:3001/blogauthor/6271767063696192aa9869f1/?fields=name,surname
  try {
    const query = q2m(req.query)
    const blogAuthor = await blogAuthorsModel.findById(req.params.id, query.options.fields);
    if (blogAuthor) {
      res.send(blogAuthor);
    } else {
      next(createError(404, `Blog Author (${req.params.id}) not found`));
    }
  } catch (error) {
    next(error);
  }
});

//update
//put
blogAuthors.put(
  "/:id",
  checkBlogAuthor,
  checkValidationResult,
  async (req, res, next) => {
    try {
      const blogAuthor = await blogAuthorsModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (blogAuthor) {
        res.send(blogAuthor);
      } else {
        next(createError(404, `Blog Author (${req.params.userId}) not found`));
      }
    } catch (error) {
      next(error);
    }
  }
);

//delete
blogAuthors.delete("/:id", async (req, res, next) => {
  try {
    const blogAuthor = await blogAuthorsModel.findByIdAndDelete(req.params.id);
    if (blogAuthor) {
      res.status(204).send();
    } else {
      next(createError(404, `Blog Author (${req.params.userId}) not found`));
    }
  } catch (error) {
    next(error);
  }
});

export default blogAuthors;
