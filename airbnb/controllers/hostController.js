const Home = require("../models/home");

exports.getAddHome = (req,res,next)=>{ 
  res.render("host/addHome.ejs" , {pageTitle: 'Add Home to airbnb', 
    currentPage: 'addHome'
  });
};

exports.getHostHomes = (req,res,next)=>{
  Home.fetchAll((registeredHomes) => res.render('host/host-home-list' , {registeredHomes ,pageTitle: ' Host Homes list',
  currentPage: 'Host Homes'
} ));
};


exports.postAddHome = (req,res,next)=>{
  const {HouseName,price,location,rating,photo} = req.body;
  const home = new Home(HouseName,price,location,rating,photo);
  home.save();

  res.render("host/home-added.ejs" , {pageTitle : 'Home Added Successfully',
    currentPage: 'homeAdded'
  });
};