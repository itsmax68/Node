exports.use404Handel = (req,res,next) => {
  res.status(404).render('404' , {pageTitle: 'page Not found',
    currentPage: '404'
  });
};