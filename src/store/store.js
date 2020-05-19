import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root_monthly_moments",
  storage,
  blacklist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(persistedReducer, applyMiddleware(thunk));
