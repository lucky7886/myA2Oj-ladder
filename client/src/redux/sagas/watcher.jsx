import { takeLatest} from "redux-saga/effects";
import handleTheme from "./handlers/handletheme";
import { SetTheme } from "../reducer/theme";

function* watcherSaga() 
{
  console.log("watcher chal rha ");
  // get() called only
  yield takeLatest(SetTheme.type, handleTheme);
}
export default watcherSaga;
