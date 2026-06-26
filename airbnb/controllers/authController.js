exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login to airbnb",
    currentPage: "login",
    isLoggedIn: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  req.session.isLoggedIn = true;
  req.session.save(err => {
    if(err) console.log(err);
    res.redirect("/");
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/login");
  });
};