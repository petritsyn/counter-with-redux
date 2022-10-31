import { combineReducers, legacy_createStore as createStore} from 'redux'
import {counterReducer} from "./counterReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    settings: counterReducer
})

export let store = createStore(rootReducer)



//@ts-ignore
window.store=store
