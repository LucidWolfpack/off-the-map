import {Mountain} from "../models/mountain.js";

async function index(req, res) {
  const mountains = await Mountain.find({})
  res.render("mountain/index",{
    title:"Mountain and Hiking Locations",
    mountains:mountains
  })
}

async function show(req, res){
  const mountain = await Mountain.findById(req.params.id)
  res.render("mountain/show",{
    mountain:mountain
  })
}

async function create(req, res){
  req.body.complete = !!req.body.complete
  const mountain = await Mountain.create(req.body)
  res.redirect('/mountain')
}

async function newMountain(req, res){
  res.render('mountain/new')
}

async function deleteMountain(req, res){
  await Mountain.findByIdAndDelete(req.params.id)
  res.redirect('/mountain')
}

async function editMountain(req, res){
  const mountain = await Mountain.findById(req.params.id)
  res.render("mountain/edit",{
    mountain:mountain
  })
}

async function updateMountain(req, res){
  req.body.complete = !!req.body.complete
  const mountain = await Mountain.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.redirect(`/mountain/${mountain._id}`)
}

export{
  index,
  show,
  create,
  newMountain as new,
  deleteMountain as delete,
  editMountain as edit,
  updateMountain as update,
}