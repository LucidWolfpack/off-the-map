import { Router } from 'express'
import * as beachController from "../controllers/beach.js"

const router = Router()

/* GET home page. */
router.get('/', beachController.index)
router.get('/new', beachController.new)
router.get('/:id', beachController.show)
router.post('/', beachController.create)
router.delete('/:id', beachController.delete)
router.get('/:id/edit', beachController.edit)
router.put('/:id', beachController.update)

export { 
  router
}