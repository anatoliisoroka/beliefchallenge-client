import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import authReducer from "./authReducer";
import generalReducer from "./generalReducer";
export default combineReducers({
    category: categoryReducer,
    auth: authReducer,
    general: generalReducer

    // category:categoryReducer
});