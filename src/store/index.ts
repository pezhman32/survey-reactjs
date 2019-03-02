import { applyMiddleware, combineReducers, createStore } from 'redux';
import surveyReducer from './survey/SurveyReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  survey: surveyReducer.setState,
});

export type AppState = ReturnType<typeof rootReducer>;

function configureStore() {
  const middlewares :any = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  return createStore(
    rootReducer,
    composeWithDevTools(),
  );
}

export const store = configureStore();

/**
 * Saves state into local storage
 * @param reducer name as key
 * @param state object
 */
export function saveState(reducer: string, state: any): any {
  window.localStorage.setItem(`state-${reducer}`, JSON.stringify(state));
  return state;
}

/**
 * Safely Loads already saved state from local storage
 * @param reducer name as key
 * @param defaultState
 */
export function loadState<T>(reducer: string, defaultState: T): T {
  const storedString = window.localStorage.getItem(`state-${reducer}`);
  if (!storedString) {
    return defaultState;
  }

  try {
    return JSON.parse(storedString);
  } catch (e) {
    // invalid json
    // clear state and log the error
    clearState(reducer);
    console.warn(`Error decoding stored state: ${storedString}`, e);

    return defaultState;
  }
}

/**
 * Clears stored state from local storage
 * @param reducer name as key
 */
export function clearState(reducer: string): void {
  window.localStorage.removeItem(`state-${reducer}`);
}
