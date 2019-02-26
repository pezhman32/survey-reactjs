import { applyMiddleware, combineReducers, createStore } from 'redux';
import surveyReducer from './survey/SurveyReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  survey: surveyReducer.setState,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const middlewares :any = [/*thunk*/]; // TODO do we need thunk?
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer),
  );

  return store;
}
