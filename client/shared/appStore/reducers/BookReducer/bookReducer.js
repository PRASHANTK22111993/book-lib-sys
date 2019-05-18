import { combineReducers } from 'redux';
import BookLibraryConstants from '../../actions/BookLibrary/bookLibraryConstants';

/**
 * Initial state
 */
const initialBookState = {
    booksList: {
        books: []
    }
};

//uniqueId, bookObj
/**
 * Books Data Reducer Function Used to Handle
 * the Books Related Information
 * @param {*} state - State Object
 * @param {*} action - Action Object
 */
const booksDataReducer = (state = initialBookState, action) => {
    switch (action.type) {
        case BookLibraryConstants.GET_LIB_DATA:
            return { ...state, booksList: action.value };
        case BookLibraryConstants.ADD_BOOK_DATA: {
            const stateRef = { ...state };
            const clonedBookListObj = { ...stateRef.booksList };
            let clonedBooksList = [...clonedBookListObj.books];
            clonedBooksList = {
                ...clonedBookListObj, books: [
                    ...clonedBooksList,
                    { ...action.value.bookObj }
                ]
            };
            return {
                ...state, booksList: clonedBooksList
            }
        }
        case BookLibraryConstants.EDIT_BOOK_DATA: {
            const stateRef = { ...state };
            const clonedBookListObj = { ...stateRef.booksList };
            let clonedBooksList = [...clonedBookListObj.books];
            clonedBooksList = clonedBooksList.map(item => {
                if (item.uniqueId === action.value.uniqueId) {
                    return { ...item, ...action.value.bookObj }
                }
                return item;
            });
            clonedBooksList = { ...clonedBookListObj, books: clonedBooksList };
            return {
                ...state, booksList: clonedBooksList
            }
        }
        default:
            return state;
    }
};

/**
 * Initial Books UI State Data
 */
const initialBookUIState = {
    searchValue: '',
    selectedBookData: null
};

/**
 * Books State Reducer Function Used to Handle
 * @param {*} state - State Object
 * @param {*} action - Action Object
 */
const booksUiAppReducer = (state = initialBookUIState, action) => {
    switch (action.type) {
        case BookLibraryConstants.ENTERED_SEARCH_VAL:
            return { ...state, searchValue: action.value }
        case BookLibraryConstants.SET_SELECTED_BOOK:
            return { ...state, selectedBookData: action.value };
        case BookLibraryConstants.CLEAR_SELECTED_BOOK:
            return { ...state, selectedBookData: null };
        default:
            return state;
    }
};

/**
 * Reducers combined and passed to store
 */
const bookReducer = combineReducers({
    serviceData: booksDataReducer,
    uiAppData: booksUiAppReducer
});

// Default Export
export default bookReducer;