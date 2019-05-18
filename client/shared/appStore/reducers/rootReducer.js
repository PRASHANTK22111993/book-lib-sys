import { combineReducers } from 'redux';

/**
 * Book Reducer Used to handle the Information Related to the Books
 */
import bookReducer from './BookReducer/bookReducer';

/**
 * UI Reducer Used to hanlde the Information Related to UI Related Data
 */
import uiReducer from './UIReducer/uiReducer';

/**
 * Component level reducers goes here
 */
const appDataReducer = combineReducers({
    libraryData: bookReducer
});

/**
 * Reducers combined and passed to store
 */
const RootReducer = combineReducers({
    appData: appDataReducer,
    uiData: uiReducer
});

// Export Default
export default RootReducer;
