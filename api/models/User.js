/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    email: {
      type: 'string',
      unique: true,
      required: true,
    },
    passwordHashed: {
      type: 'string',
      required: true,
    },
  },
  beforeValidate(params, cb) {
    if (params.password)
      params.passwordHashed = CipherService.hash(params.password);
    cb();
  },
};
