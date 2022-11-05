import {Beach} from "../models/beach.js"

async function index(req, res) {
  const beaches = await Beach.find({})
  res.render("beach/index", {
    title:"Beaches and Water Front Locations",
    beaches:beaches
  }) 
}

async function show(req, res){
  const beach = await Beach.findById(req.params.id)
  res.render("beach/show", {
    beach:beach
  })
}

async function create(req, res){
  req.body.complete = !!req.body.complete
  const beach = await Beach.create(req.body)
  res.redirect('/beach')
}

async function newBeach(req, res){
  res.render("beach/new")
}

async function deleteBeach(req, res){
  await Beach.findByIdAndDelete(req.params.id)
  res.redirect('/beach')
}

async function editBeach(req, res){
  const beach = await Beach.findById(req.params.id)
  res.render("beach/edit", {
    beach:beach
  })
}

async function updateBeach(req, res){
  req.body.complete = !!req.body.complete
  const beach = await Beach.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.redirect(`/beach/${beach._id}`)
}

export{
  index,
  show,
  create,
  newBeach as new,
  deleteBeach as delete,
  editBeach as edit,
  updateBeach as update
}
