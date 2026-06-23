const path = require('path');

const express = require('express');

const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");
const { use404Handel } = require('./controllers/erroes');

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

app.use(express.urlencoded());

app.use(storeRouter);
app.use("/host" ,hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(use404Handel);

const PORT= 6005;
app.listen(PORT , () => {
  console.log(`server running on port http://localhost:${PORT}`);
});