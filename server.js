import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import logger from 'morgan'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import methodOverride from 'method-override'
import './config/database.js'


// Router Imports
import { router as indexRouter } from './routes/index.js'
import { router as todosRouter } from './routes/todos.js'
import { router as beachRouter  } from './routes/beach.js'
import { router as mountainRouter } from './routes/mountain.js'
import { router as urbanRouter } from './routes/urban.js'

const app = express()

app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'))
app.set('view engine', 'ejs')

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

app.use(methodOverride('_method'))  


// Mounted Routers
app.use('/', indexRouter)
app.use('/todos', todosRouter)
app.use('/beach', beachRouter)
app.use('/mountain', mountainRouter)
app.use('/urban', urbanRouter)


app.use(function (req, res, next) { next(createError(404)) })

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

export { app }