// import currentUser from './currentUser'
import counter from './counter'
import userStore from './user'
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage';



export const rootReducer = combineReducers({
    counter:counter,
    user:userStore
})
