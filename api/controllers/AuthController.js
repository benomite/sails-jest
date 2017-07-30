/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create(req, res) {
    const { email, password } = req.allParams();
    User.findOne({ email })
      .then(
        user =>
          CipherService.compare(password, user.passwordHashed) && {
            user,
            token: CipherService.sign(user.id),
          }
      )
      .then(res.created)
      .catch(res.negotiate);
  },
};
