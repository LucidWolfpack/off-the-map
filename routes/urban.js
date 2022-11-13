import { Router } from 'express'
import * as urbanController from "../controllers/urban.js"

const router = Router()

router.get('/', urbanController.index)
router.get('/new', urbanController.new)
router.get('/:id', urbanController.show)
router.post('/', urbanController.create)
router.delete('/:id', urbanController.delete)
router.get('/:id/edit', urbanController.edit)
router.put('/:id', urbanController.update)


export{
  router
}