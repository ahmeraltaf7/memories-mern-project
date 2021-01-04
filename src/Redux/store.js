import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

//For Api requests in actions method
const middleware = [thunk];

const store = createStore(reducers, compose(applyMiddleware(...middleware)));

export default store;
