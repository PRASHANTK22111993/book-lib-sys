import AppConfig from '../../../app/AppConfig';

/**
 * Used to Generate the Service Url
 * @param {*} key 
 */
export const getServiceUrl = (key = '') => ((key && AppConfig[key]) || '');