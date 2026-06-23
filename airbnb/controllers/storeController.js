const Home = require("../models/home");

exports.getIndex = (req,res,next)=>{
    Home.fetchAll(registeredHomes => res.render('store/index' , {registeredHomes ,pageTitle: 'airbnb Home',
    currentPage: 'index'
  } )
);
};

exports.getHomes = (req,res,next)=>{
    Home.fetchAll(registeredHomes => res.render('store/home-list' , {registeredHomes ,pageTitle: 'Homes list',
    currentPage: 'Home'
  } ));
};

exports.getFavList = (req,res,next) => { 
  Home.fetchAll((registeredHomes) => res.render('store/fav-list' , {registeredHomes,pageTitle: 'My Favourites',
  currentPage: 'fav-list'
  } )
);
}

exports.getBookings = (req,res,next) => { res.render('store/bookings' , { pageTitle: 'My Bookings',
    currentPage: 'bookings'
  } ); 
}

