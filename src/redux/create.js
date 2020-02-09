import { createStore, applyMiddleware } from "redux";
import reducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/saga";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function create() {
  const token = localStorage.getItem("token");

  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
      books: {
        books: [],
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
