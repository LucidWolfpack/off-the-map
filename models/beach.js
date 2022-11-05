import mongoose from "mongoose";

const instanceSchema = new mongoose.Schema({
  
}, {timestamps: true})

const beachSchema = new mongoose.Schema({
  title: {type:String}, 
  level: {type:String},
  area: {type:String},
  gear: {type:String},
  instances: [instanceSchema]
})

const Beach = mongoose.model("Beach", beachSchema)
export {Beach} 
