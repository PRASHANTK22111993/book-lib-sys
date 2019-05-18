/**
 * Utility Function Used to Check the Object Type
 * @param {*} obj 
 */
export const isObjectType = (obj = null) => {
    let returnValue = false;
    if (obj && typeof obj === "object" && Object.keys(obj).length > 1) {
        returnValue = true;
    }
    return returnValue;
};

/**
 * Utility Function Used to Check the Type of Array and Length
 * @param {*} obj 
 */
export const isArrayType = (obj = null) => {
    return ((obj && obj.constructor.toString().indexOf("Array") > -1 && obj.length > 0) || false);
};

/**
 * Utility Function Used to get the Factory Object for Book
 */
export const getBookFactoryObj = () => {
    return {
        uniqueId: +new Date(),
        bookName: '',
        bookAuthor: '',
        bookPublisher: '',
        bookCount: '',
        bookDescription: ''
    };
};

/**
 * This Utility Function is used to check the Whether the Parameter is Javascript function or not.
 * @param {*} functionToCheck - Function Object
 */
export const isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}