import {Todo} from "../models/todos.js"

async function index(req, res) {
  const todos = await Todo.find({})
  res.render("todos/index", {
    title:"Todos Index Page",
    todos:todos
  })
} 

async function show(req, res){
  console.log('REQ.PARAMS.ID',req.params.id)
  const todo = await Todo.findById(req.params.id)
  console.log('TODO::::',todo)
  res.render("todos/show", {
    todo:todo
  })
}

async function create(req, res){
  req.body.complete = !!req.body.complete
  const todo = await Todo.create(req.body)
  console.log(todo)
  res.redirect('/todos')
}

async function newTodo(req, res){
  res.render("todos/new")
}

async function deleteTodo(req, res){
  console.log(req.params.id)
  await Todo.findByIdAndDelete(req.params.id)
  res.redirect('/todos')
}

async function editTodo(req,res){
  console.log('REQ.PARAMS.ID',req.params.id)
  const todo = await Todo.findById(req.params.id)
  console.log(todo)
  res.render("todos/edit", {
    todo:todo
  })
}

async function updateTodo(req, res){
  req.body.complete = !!req.body.complete
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
  console.log(todo)
  res.redirect(`/todos/${todo._id}`)
}

async function createInstance(req, res){
  req.body.ontime = !!req.body.ontime
  //convert value of on to read false to true
  const todo = await Todo.findById(req.params.id)
  todo.instances.push(req.body)
  await todo.save()
  // const newInstance = todo.instances.at(-1)
  //grab most recent instance
  res.redirect(`/todos/${todo._id}`)
}

async function deleteInstance(req, res){
  //convert value of on to read false to true
  const todo = await Todo.findById(req.params.todoId)
  todo.instances.remove({_id:req.params.instanceId})
  await todo.save()
  // const newInstance = todo.instances.at(-1)
  //grab most recent instance
  res.redirect(`/todos/${todo._id}`)
}

export{
  index,
  show,
  create,
  newTodo as new,
  deleteTodo as delete,
  editTodo as edit,
  updateTodo as update,
  createInstance,
  deleteInstance
}