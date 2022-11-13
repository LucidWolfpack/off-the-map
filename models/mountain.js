import mongoose from "mongoose";

const mountainSchema = new mongoose.Schema({
  title: {type:String}, 
  level: {type:String},
  area: {type:String},
  gear: {type:String},
})


const Mountain = mongoose.model("Mountain", mountainSchema)
export{Mountain}