import { createStore, combineReducers } from "redux";
import { bookReducers } from "./reducres/bookReducers";

const combinedReducer = combineReducers({
    books: bookReducers
    //more Reducer: ex: User, comment, like
})

export const store = createStore(combinedReducer);



