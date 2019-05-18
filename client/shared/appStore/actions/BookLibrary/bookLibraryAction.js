import BookLibraryConstants from './bookLibraryConstants';
import { getDataRequest } from '../../../services/ApiDAL';
import { Action, initLoadingData, hideLoadingData } from '../Common/action';
import { getServiceUrl, getBookFactoryObj } from '../../../utils';
import { AppConstants } from '../../../../app/AppConfig';

/**
 * Action Creators Used to get the Library Books Data
 */
export const getLibraryDataAction = () => async dispatch => {
    try {
        // First Dispatch the Loading of Data
        dispatch(initLoadingData());
        const contMapUrl = getServiceUrl(AppConstants.BOOKS_URL);
        const data = await getDataRequest(contMapUrl);
        if (data) {
            const { data: responseData } = data;
            dispatch(Action(BookLibraryConstants.GET_LIB_DATA, responseData));
        }
        dispatch(hideLoadingData());
    } catch (err) {
        dispatch(hideLoadingData());
    }
};

/**
 * Action Creator used to Dispacth the Entered Search Value 
 */
export const setSearchValue = data => dispatch => {
    dispatch(Action(BookLibraryConstants.ENTERED_SEARCH_VAL, data));
};

/**
 * Action Creator Used to Dispatch the Add Or Edit Book
 */
export const addOrEditBookData = (data, props) => dispatch => {
    const { uniqueId = '' } = data || {};
    // if Unique Id Exist then It Means Its a Edit
    // If Unique Id Doesn't Exist then It Means It's a New Book
    if (uniqueId) {
        dispatch(Action(BookLibraryConstants.EDIT_BOOK_DATA, { uniqueId, bookObj: data }));
        alert('Book has been updated Successfully');
    } else {
        const bookObj = { ...getBookFactoryObj(), ...data };
        dispatch(Action(BookLibraryConstants.ADD_BOOK_DATA, { bookObj }));
        alert('Book has been added Successfully');
    }
    props.history.push(AppConstants.NAV_URL.VIEW);
};

/**
 * Action Creator Used to Set the Selected Book Data
 */
export const setSelectedBookData = (data, props) => dispatch => {
    dispatch(Action(BookLibraryConstants.SET_SELECTED_BOOK, data));
    props.history.push(AppConstants.NAV_URL.ADD);
};

/**
 * Action Creator Used to Clear the Selected Book Data
 */
export const clearSelectedBookData = () => dispatch => dispatch(Action(BookLibraryConstants.CLEAR_SELECTED_BOOK));
