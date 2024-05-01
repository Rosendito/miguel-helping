import { PRIVATE, http } from "../http";

/**
 * @typedef {Object} TContact
 * @property {string} alias
 * @property {string | null} account_number
 * @property {string} description
 */

/**
 * Contact API Service.
 */
class ContactAPI {

  /**
   * @private
   */
  BASE;

  constructor() {
    this.BASE = PRIVATE + "contact"
  };

  /**
   * @param {string} ID 
   */
  async get(ID) {
    const response = await http.get(`${this.BASE}/${ID}`);
    return response;
  };

  async getAll(alias = "") {
    const response = await http.get(`${this.BASE}?alias=${alias}`);
    return response;
  };

  /**
   * @param {TContact} values 
   */
  async create(values) {
    const response = await http.post(`${this.BASE}`, values);
    return response;
  };

  /**
   * @param {string} ID
   * @param {TContact} values 
   */
  async update(ID, values) {
    const response = await http.patch(`${this.BASE}/${ID}`, values);
    return response;
  };

    /**
   * @param {string} ID
   */
    async delete(ID) {
      const response = await http.delete(`${this.BASE}/${ID}`);
      return response;
    };

};

export default ContactAPI;