import { PRIVATE, http } from "../http";

/**
 * @typedef {Object} TOperation
 * @property {number} amount
 * @property {string} account_number
 * @property {string} description
 */

/**
 * Movement API Service.
 */
class MovementAPI {

  /**
   * @private
   */
  BASE;

  constructor() {
    this.BASE = PRIVATE + "movement"
  };

  async get(page = 1, pagSize = 10) {
    const response = await http.get(`${this.BASE}?page=${page}&page_size=${pagSize}`);
    return response;
  };

  async getCredits(page = 1, pagSize = 10) {
    const response = await http.get(`${this.BASE}?page=${page}&page_size=${pagSize}&multiplier=1`);
    return response;
  };

  async getDebits(page = 1, pagSize = 10) {
    const response = await http.get(`${this.BASE}?page=${page}&page_size=${pagSize}&multiplier=-1`);
    return response;
  };

  /**
   * @param {TOperation} values 
   */
  async transfer(values) {
    const response = await http.post(`${this.BASE}`, values);
    return response;
  };

};

export default MovementAPI;