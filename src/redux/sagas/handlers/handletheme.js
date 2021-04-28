import { put } from "redux-saga/effects";
import { SetTheme } from "../../reducer/theme";

function* handleTheme(action) {
  try {
    console.log("handleThemeChal rha");
    yield put(SetTheme);
  } catch (error) {
    console.log(error);
  
}
}
export default handleTheme;
