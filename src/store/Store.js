import { createStore, applyMiddleware } from 'redux'
import { logger } from './middleware'
import plans from '../reducers/plans'
const store = createStore(
    plans,
    applyMiddleware(logger)
)


export default store
