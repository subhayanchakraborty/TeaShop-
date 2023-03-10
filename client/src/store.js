import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllTeaReducer} from './reducers/teaReducer'

const rootReducer= combineReducers({
    getAllTeaReducer:getAllTeaReducer
})
const initialState={}
const middleware=[thunk]

const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;