import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watcherSaga from "../sagas/watcher";
import themeReducer from "../reducer/theme";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;
