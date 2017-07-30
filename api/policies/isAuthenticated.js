module.exports = (req, res, next) => {
  try {
    req.user = CipherService.verify(req.param('token'));
    next();
  } catch (err) {
    res.forbidden(err);
  }
};
