import { createSelector } from 'reselect';

/**
 * Selector Used to get the UI Data
 * @param {*} state - App State
 */
const uiDataSel = state => state.uiData;

/**
 * Selector: Used to get the UI Data Loader Info Node
 */
const uiDataLoaderInfoSel = createSelector(
    [uiDataSel],
    uiData => uiData.loaderInfo || {}
);

/**
 * Selector used to get the Ui Data Nav 
 */
const uiDataNavInfoSel = createSelector(
    [uiDataSel],
    uiData => uiData.navInfo || {}
);

/**
 * Selector Used to get the UI Data Loader
 */
const getUiDataLoaderInfoSel = createSelector(
    [uiDataLoaderInfoSel],
    uiDataLoaderInfo => uiDataLoaderInfo
);

/**
 * Selector Used to get the Is Data Loading or not
 */
export const getIsLoadingSel = createSelector(
    [getUiDataLoaderInfoSel],
    loaderInfo => loaderInfo.isLoading || false
);

/**
 * Selector Used to get Selected Navigation Menu
 */
export const getSelectedNavMenu = createSelector(
    [uiDataNavInfoSel],
    navInfo => navInfo.selectedMenu || '/'
);