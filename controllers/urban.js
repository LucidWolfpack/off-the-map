import { Urban } from "../models/urban.js";

async function index(req, res) {
  const urban = await Urban.find({})
  res.render("urban/index",{
    title:"Urban and abandoned Locations",
    urban:urban
  })
}




export{
  index,
}