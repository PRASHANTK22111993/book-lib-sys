import ActionConstants from './actionConstants';

/**
 * Common Action Used to dispatch the action
 * @param {*} mtype - Action Type
 * @param {*} value - Object
 */
export const Action = (mtype, value) => {
    return { type: mtype, value };
};

/**
 * Action Creator Used to Show the Loading of Data
 */
export const initLoadingData = () => dispatch => {
    dispatch(Action(ActionConstants.SHOW_LOADER));
};

/**
 * Action Creator Used to hide the Loading of Data
 */
export const hideLoadingData = () => dispatch => {
    dispatch(Action(ActionConstants.HIDE_LOADER));
};

/**
 * Action Creator Used to Dispatch Action for Selected Nav Menu
 */
export const setSelNavMenuLink = (data) => dispatch => {
    dispatch(Action(ActionConstants.SELECTED_MENU, data))
};