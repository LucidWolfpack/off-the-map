import mongoose from "mongoose";

const urbanSchema = new mongoose.Schema({
  title: {type:String}, 
  level: {type:String},
  area: {type:String},
  gear: {type:String},
})

const Urban = mongoose.model("Urban", urbanSchema)
export{Urban}