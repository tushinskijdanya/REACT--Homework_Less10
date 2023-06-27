import { createStore, combineReducers } from "redux";

import { postReducer } from "./postReducer";
import { noteReducer } from "./noteReducer";

const rootReducer = combineReducers({
    pos: postReducer,
    not: noteReducer
})

export const blogStore = createStore(rootReducer);