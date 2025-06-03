import { combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  custome: customerReducer,
});

const store = createStore(rootReducer);

export default store;
