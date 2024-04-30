import Cookies from "js-cookie";

/**
 * Sets in a Cookie linked to a key the value passed by parameter.
 * @param {string} key - Key to which the value passed by parameter can be accessed.
 * @param {string} value - Value stored in the Cookie linked to the indicated key.
 */
export const setCookie = (key, value) => {
  Cookies.set(key, value, { expires: 30 });
};

/**
 * Gets the value of a Cookie linked to the given key parameter.
 * @param {string} key - Link to the Cookie containing the value to be obtained
 * @returns {string | null} - If the Cookie linked to the key exists, it returns its string value, otherwise it returns null.
 */
export const getCookie = (key) => {
  return Cookies.get(key) ?? null;
};

/**
 * Removes the value of the Cookie linked to the key passed by parameter.
 * @param {string} key - Link to the Cookie you wish to remove its value.
 */
export const removeCookie = (key) => {
  Cookies.remove(key);
};