import { createSelector } from 'reselect';
import { isArrayType } from '../../../utils';

/**
 * Selector Used to get the App Data
 * @param {*} state - App State
 */
const appDataSel = state => state.appData;

/**
 * Selector Used to get the Library Data Sel
 */
const libraryDataSel = createSelector(
    [appDataSel],
    appData => ((appData && appData.libraryData) || {})
);

/**
 * Selector Used to get the Library Service Data
 */
const libraryServiceDataSel = createSelector(
    [libraryDataSel],
    libraryData => ((libraryData && libraryData.serviceData) || {})
);

/**
 * Selector Used to get the Library UI App Data
 */
const libraryUiAppDataSel = createSelector(
    [libraryDataSel],
    libraryData => ((libraryData && libraryData.uiAppData) || {})
);

/**
 * Used to get the Search Value of Entered Search Keyword
 */
const libUiAppDataSearchValSel = createSelector(
    [libraryUiAppDataSel],
    libUiAppData => ((libUiAppData && libUiAppData.searchValue) || '')
);

/**
 * Used to get the Selected book Data
 */
export const libUiAppDataSelectedbookSel = createSelector(
    [libraryUiAppDataSel],
    libUiAppData => ((libUiAppData && libUiAppData.selectedBookData) || null)
);

/**
 * Selector Used to the Whole Books List
 */
const libraryBookListSel = createSelector(
    [libraryServiceDataSel],
    libSerData => ((libSerData && libSerData.booksList && libSerData.booksList.books) || [])
);

/**
 * Function Used to get the Filted Books List
 * @param {*} bookList 
 * @param {*} searchValue 
 */
const getFilterBookList = (bookList = [], searchValue = '') => {
    return bookList.filter(book =>
        ((book.bookName.toLowerCase().indexOf(searchValue) !== -1)
            || (book.bookAuthor.toLowerCase().indexOf(searchValue) !== -1)
            || (book.bookPublisher.toLowerCase().indexOf(searchValue) !== -1)));
};

/**
 * Selector Used to Get the Books List
 */
const getBooksListSel = createSelector(
    [libraryBookListSel, libUiAppDataSearchValSel],
    (libBooksList, searchValue) => {
        if (searchValue) {
            return getFilterBookList(libBooksList, searchValue.toLowerCase())
        }
        return libBooksList;
    }
);

/**
 * Export used to get the List of Books Availble in the Library
 */
export const getTableBooksListSel = createSelector(
    [getBooksListSel],
    booksList => {
        let returnValue = [];
        if (isArrayType(booksList)) {
            returnValue = booksList.map(item => {
                const { bookName = '', bookAuthor = '', bookPublisher = '' } = item || {};
                return {
                    name: bookName,
                    author: bookAuthor,
                    publication: bookPublisher,
                    dataObj: item
                }
            });
        }
        return returnValue;
    }
);

/**
 * Check All Books Has been Already fetched
 */
export const checkBooksHasBeenFetched = createSelector(
    [getTableBooksListSel],
    booksList => ((booksList && booksList.length > 0) ? true : false)
);