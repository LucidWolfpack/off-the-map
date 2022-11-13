import { Router } from 'express'
import * as mountainController from "../controllers/mountain.js"

const router = Router()

router.get('/', mountainController.index)
router.get('/new', mountainController.new)
router.get('/show', mountainController.show)
router.post('/create', mountainController.create)
router.delete('/:id', mountainController.delete)
router.get('/id/edit', mountainController.edit)
router.put('/:id', mountainController.update)

export {
  router
}