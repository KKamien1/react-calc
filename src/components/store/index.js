import { createStore, compose } from "redux";
import rootReducer from "../../actions";

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(...enhancers);

export const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

// import ee from "../eventEmitter";

// export const store = {
//   displayedExpression: 0,
//   get curExpression() {
//     return this.displayedExpression;
//   },
//   set newExpression(curExpression) {
//     this.displayedExpression = curExpression;
//     ee.emitEvent("displayUpdate", [this.curExpression]);
//     ee.emitEvent("historyUpdate", [this.curExpression]);
//   }
// };

// export default store;
