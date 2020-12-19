import {appReducer} from "./appReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;