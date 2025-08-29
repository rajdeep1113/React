
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./reducers";

const rootReducer = combineReducers({
  postsState: postReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
