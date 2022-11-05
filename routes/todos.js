import { Router } from 'express'
import * as todosController from "../controllers/todos.js"

const router = Router()

/* GET home page. */
router.get('/', todosController.index)
router.get('/new', todosController.new)
router.get('/:id', todosController.show)
router.post('/', todosController.create)
router.delete('/:id', todosController.delete)
router.get('/:id/edit', todosController.edit)
router.put('/:id', todosController.update)
router.post('/:id/instances', todosController.createInstance)
router.delete('/:todoId/instances/:instanceId', todosController.deleteInstance)

export { 
  router
}