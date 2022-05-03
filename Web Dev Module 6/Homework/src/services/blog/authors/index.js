import express from "express"
import blogAuthorsModel from "./model.js"
const blogAuthors = express.Router()
//insert
//create
//post
blogAuthors.post("/", async  (req, res) => {  
const newblogAuthor = new blogAuthorsModel(req.body)
const savedblogAuthor = await newblogAuthor.save() 
res.send(savedblogAuthor)
})

//select
//read
//get
  blogAuthors.get("/", async (req, res) => {
const blogAuthors = await blogAuthorsModel.find()   
res.send(blogAuthors)
})

//select where
//read
//get
blogAuthors.get("/:id", async  (req, res) => {
const blogAuthor = await blogAuthorsModel.findById(req.params.id)
res.send(blogAuthor)
})
  //update
  //put
  blogAuthors.put("/:id",async  (req, res) => {
    const blogAuthor = await blogAuthorsModel.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true } 
      )
      res.send(blogAuthor)
     })
//delete
  blogAuthors.delete("/:id",async  (req, res) => {

    await blogAuthorsModel.findByIdAndDelete(req.params.id)
    res.status(204).send()
  })
  
  export default blogAuthors