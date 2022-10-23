import { combineReducers, legacy_createStore as createStore} from 'redux'
import {CounterReducer} from "./CounterReducer";
import {SettingsReducer} from "./SettingsReducer";

export type AppRootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    counter: CounterReducer,
    settings: SettingsReducer
})

export let store = createStore(rootReducer)




//@ts-ignore
window.store=store
