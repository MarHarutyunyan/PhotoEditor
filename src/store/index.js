import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
