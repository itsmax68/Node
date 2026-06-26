// Core Module
const path = require('path');

// External Module
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_PATH = "mongodb+srv://manavkalathiya828_db_user:7d8HrTkoy1qyEGxX@cluster-airbnb.gctjbod.mongodb.net/airbnb?appName=Cluster-airbnb"

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions'
});

app.use(express.urlencoded());
app.use(session({
  secret: 'a very secret key for airbnb',
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn === true;
  next();
});

app.use(authRouter);
app.use(storeRouter);

app.use("/host", (req, res, next)=>{
  if(req.isLoggedIn){
    next();
  } else{
    return res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoose.connect(DB_PATH).then(() =>{
  console.log('connected to mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err =>{
  console.log("error while commecting to mongo:",err);
});
