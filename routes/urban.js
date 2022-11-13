import { Router } from 'express'
import * as urbanController from "../controllers/urban.js"

const router = Router()

router.get('/', urbanController.index)



export{
  router
}