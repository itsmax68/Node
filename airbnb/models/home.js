const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');


module.exports = class Home {
  constructor(HouseName,price,location,rating,photo) {
    this.HouseName = HouseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
  }

  save() {
    Home.fetchAll(registeredHomes => {
      registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, 'data', 'homes.json' );
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=> {
      console.log('file writting concluded',error);
    });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, 'data', 'homes.json' );
    fs.readFile(homeDataPath, (err,data) => {
      callback(!err ? JSON.parse(data): []);
    });
  }
}