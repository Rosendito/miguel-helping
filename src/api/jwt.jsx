import { http } from "./http";
import { getCookie, removeCookie, setCookie } from "../utils/cookieStorage";

const KEY = import.meta.env.VITE_BANK_KEY ?? "bank_service_jwt_key";

/**
 * Sets the authorization header if a token value is passed. 
 * If nothing is passed, the authorization header is removed.
 * @param {string | null} token - JWT value.
 */
export const setSession = (token = null) => {
  try {
    if (token) {
      setKey(token);
      http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      removeKey();
      delete http.defaults.headers.common["Authorization"];
    }
  } catch (error) {
    console.error("Set session error:", error);
    throw Error(error);
  }
};

/**
 * Stores in a Cookie the jwt value.
 * @param {string} value - JWT value.
 */
export const setKey = (value) => setCookie(KEY, value);

/**
 * Gets the jwt key from a Cookie.
 * @returns {string | null} - JWT value or null if no JWT value exists.
 */
export const getKey = () => getCookie(KEY);

/**
 * Removes the JWT value from the Cookies.
 */
export const removeKey = () => removeCookie(KEY);