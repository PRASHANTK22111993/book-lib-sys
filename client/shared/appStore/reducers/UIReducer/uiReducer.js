import { combineReducers } from 'redux';
import ActionConstants from '../../actions/Common/actionConstants';

/**
 * Reducer Function Used to Handle the Loading Info Related Data
 * @param {*} state - State Object
 * @param {*} action - Object
 */
const loaderReducer = (state = { isLoading: false }, action) => {
    switch (action.type) {
        case ActionConstants.SHOW_LOADER:
            return { ...state, isLoading: true };
        case ActionConstants.HIDE_LOADER:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};

/**
 * Reducer Function Used to Handle the Navigation Menu reducer
 * @param {*} state - State Object
 * @param {*} action - Object
 */
const navReducer = (state = { selectedMenu: '/' }, action) => {
    switch (action.type) {
        case ActionConstants.SELECTED_MENU:
            return { ...state, selectedMenu: action.value };
        default:
            return state;
    }
};

/**
 * Ui Data Reducer Composition
 */
const uiDataReducer = combineReducers({
    loaderInfo: loaderReducer,
    navInfo: navReducer
});

// Default Export
export default uiDataReducer;