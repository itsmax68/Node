const express = require('express');
const path = require('path');

const hostRouter =  express.Router();
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home" , (req,res,next)=>{
  res.render("addHome.ejs" , {pageTitle: 'Add Home to airbnb'});
});

const registeredHomes = [];

hostRouter.post("/add-home" , (req,res,next)=>{
  console.log('Home register sucessful for: ', req.body );
  registeredHomes.push(req.body);
  res.render("homeAdded.ejs" , {pageTitle : 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;