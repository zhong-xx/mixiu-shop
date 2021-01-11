import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import user from './reducers/user'


const reducer = combineReducers({
    user
})

const store = createStore(reducer, compose(applyMiddleware(...[thunk])))

export default store

