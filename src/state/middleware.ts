import {createLogger} from 'redux-logger'
import {Middleware} from 'redux'

const middleware: Middleware[] = []

if (process.env.NODE_ENV === `development`) {
  // add redux-logger (only in development)
  middleware.push(
    createLogger({
      collapsed: true,
    })
  )
}

export default middleware
