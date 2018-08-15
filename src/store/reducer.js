
import { combineReducers } from 'redux'

import todolist from './todolist'
import store from '.';

const reducer = combineReducers({
    todolist
})

export default reducer