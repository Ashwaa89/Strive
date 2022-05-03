import mongoose from "mongoose"

const { Schema, model } = mongoose

const blogAuthorsSchema = new Schema(
{
 name: { type: String, required: true },
 surname: { type: String, required: true },
 email: { type: String, required: true },
dateOfBirth: { type: Date, required: true },
avatar: { type: String},
},
{
timestamps: true, 
}
 )
  //name of collection in DB, schema
  export default model("blogAuthors", blogAuthorsSchema)