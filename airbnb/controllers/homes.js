const registeredHomes = [];

exports.getAddHome = (req,res,next)=>{
  res.render("addHome.ejs" , {pageTitle: 'Add Home to airbnb', 
    currentPage: 'addHome'
  });
}; 


exports.postAddHome = (req,res,next)=>{
  console.log('Home register sucessful for: ', req.body , req.body.HouseName);
  registeredHomes.push(req.body);
  res.render("homeAdded.ejs" , {pageTitle : 'Home Added Successfully',
    currentPage: 'homeAdded'
  });
};

exports.getHomes = (req,res,next)=>{
  console.log(registeredHomes)
  res.render('home' , {registeredHomes ,pageTitle: 'airbnb Home'} );
};