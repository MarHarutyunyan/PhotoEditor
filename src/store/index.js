import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./dataReducer";
import { uiReducer } from "./uiReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
