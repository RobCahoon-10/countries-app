import config from '../config'

/** @type {*} */
const countriesHelper = {}

/**
 * Countries Content API URL
 * 
 * @returns {string} Countries Content API URL
 */
 countriesHelper.apiUrl = `${config.countries.domain}${config.countries.contextPath}`


 export default countriesHelper