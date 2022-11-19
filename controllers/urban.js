import { Urban } from "../models/urban.js";

async function index(req, res) {
  const urbans = await Urban.find({})
  res.render("urban/index",{
    title:"Urban and abandoned Locations",
    urbans:urbans
  })
}

async function show(req, res){
  const urban = await Urban.findById(req.params.id)
  res.render("urban/show", {
    urban:urban
  })
}

async function create(req, res){
  req.body.complete = !!req.body.complete
  const urban = await Urban.create(req.body)
  res.redirect('/urban')
}

async function newUrban(req, res){
  res.render("urban/new")
}

async function deleteUrban(req, res){
  await Urban.findByIdAndDelete(req.params.id)
  res.redirect('/urban')
}

async function editUrban(req, res){
  const urban = await Urban.findById(req.params.id)
  res.render("urban/edit", {
    urban:urban
  })
}

async function updateUrban(req, res){
  req.body.complete = !!req.body.complete
  const urban = await Urban.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.redirect(`/urban${urban._id}`)
}


export{
  index,
  show,
  create,
  newUrban as new,
  deleteUrban as delete,
  editUrban as edit,
  updateUrban as update
}