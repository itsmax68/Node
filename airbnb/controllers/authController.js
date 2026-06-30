const { body, validationResult } = require('express-validator');
const User = require('../models/user');

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

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Register to airbnb",
    currentPage: "signup",
    isLoggedIn:false
  });
};

exports.postSignup = [
  body('firstName').trim().not().isEmpty().withMessage("First name is required"),
  body('lastName').trim().not().isEmpty().withMessage("Last name is required"),
  body('email').trim().isEmail().withMessage("Invalid email"),
  body('password').trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  body('confirmPassword').trim().custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
  body('userType').trim().not().isEmpty().withMessage("User type is required"),
  body('terms').trim().not().isEmpty().withMessage("Terms are required"),
  (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('auth/signup', {
      pageTitle: "Register to airbnb",
      currentPage: "signup",
      isLoggedIn:false,
      errors: errors.array(),
      oldInput: req.body
    });
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType
  });

  user.save().then(() => {
    res.redirect("/login");
  }).catch(err => {
    console.log(err);
    res.redirect("/signup");
  });
}];