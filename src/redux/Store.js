import { createStore,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/UsersReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store=createStore(
    userReducer,
    composeEnhancers(applyMiddleware(thunk))

)

export default store