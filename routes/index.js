import { Router } from 'express'
import * as indexController from "../controllers/index.js"

const router = Router()

/* GET home page. */
router.get('/', indexController.index)

export { 
  router
}
