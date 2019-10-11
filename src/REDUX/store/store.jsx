import {createStore, applyMiddleware} from "redux";
import monitor from "../reducers/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger"


const store = createStore(
    monitor,
    composeWithDevTools(applyMiddleware(logger)));

export default store;


