const Home = require("../models/home");

exports.getAddHome = (req,res,next)=>{
  res.render("addHome.ejs" , {pageTitle: 'Add Home to airbnb', 
    currentPage: 'addHome'
  });
}; 


exports.postAddHome = (req,res,next)=>{
  const {HouseName,price,location,rating,photo} = req.body;
  const home = new Home(HouseName,price,location,rating,photo);
  home.save();

  res.render("homeAdded.ejs" , {pageTitle : 'Home Added Successfully',
    currentPage: 'homeAdded'
  });
};

exports.getHomes = (req,res,next)=>{
  const registeredHomes = Home.fetchAll(registeredHomes => res.render('home' , {registeredHomes ,pageTitle: 'airbnb Home',
    currentPage: 'Home'
  } ));
  
};