/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const { name, version } = require('../../package');

module.exports = {
  index(req, res) {
    return res.json({ name, version });
  },
};
