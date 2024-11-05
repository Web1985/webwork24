export const HEADERS = new Headers({
    Accept: "application/vnd.api+json",
});

export const SERVER_URL = 'https://webwork.best';
export const API_URL = '/api/';
//export const KNOWLEDGE_BASE = 'knowledge-base';

/**
 * Endpoint URLs.
 *
 * @type {{}}
 */
export const URLS = {
    HOME: SERVER_URL+API_URL + 'home',
    KNOWLEDGE_BASE: SERVER_URL+API_URL + 'knowledge-base',
    ARTICLE: SERVER_URL+API_URL+'knowledge-base/node',
    PARENT: SERVER_URL+API_URL+'parent',
    CATEGORY: SERVER_URL+API_URL+'category',
    CATEGORIES: SERVER_URL+API_URL + 'categories',
    CARD_ITEM: SERVER_URL+API_URL + 'card',
    SESSION: SERVER_URL+'/session/token',
    WEBFORM: SERVER_URL+'/webform_rest/submit?_format=json',
    CONTACT: '/webform/contact/api'
}
