import setUsername from "./SetUsername";
import updateNotice from'./UpdateNotice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    setUsername,
    updateNotice
})

export default rootReducer