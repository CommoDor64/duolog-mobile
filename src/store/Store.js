import { createStore, applyMiddleware, combineReducers } from 'redux'
import { logger } from './middleware'
import reducers from '../reducers/plans'

const store = createStore(
    reducers.plans,
    applyMiddleware(logger)
)


export default store
