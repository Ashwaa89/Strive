import express from "express";
import createError from "http-errors";
import blogAuthorsModel from "./model.js";
import { checkBlogAuthor, checkValidationResult } from "./validation.js";
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
  try {
    const blogAuthors = await blogAuthorsModel.find();

    res.send(blogAuthors);
  } catch (error) {
    next(error);
  }
});

//select where
//read
//get
blogAuthors.get("/:id", async (req, res, next) => {
  try {
    const blogAuthor = await blogAuthorsModel.findById(req.params.id);
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
