const isLoggedIn = (req,res,next) => {
  if (req.user) return next();
  else {
    res.render('signedOut');
  }
}

module.exports = isLoggedIn;