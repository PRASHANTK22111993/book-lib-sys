import axios from 'axios';

/**
 * Function is Used to get the Data Request From API URL
 * @param {*} url - String API URL
 */
export const getDataRequest = async (url) => {
    const response = await axios.get(url);
    return response;
};

/**
 * Function is Used to Post the Data Request From API URL
 * @param {*} url - String API URL
 * @param {*} data - Payload Data
 */
export const postDataRequest = async (url, postData) => {
    const response = await axios.post(url, postData);
    return response;
};