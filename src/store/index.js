import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { dataReducer } from "./dataReducer"
import { uiReducer } from "./uiReducer"
import middleWares from "./middleWares/index"

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
})

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleWares), composeWithDevTools())
  )

  return store
}

export const store = configureStore()
