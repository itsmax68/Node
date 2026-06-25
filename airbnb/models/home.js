const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  },
  photoUrl: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require:true
  }
});

module.exports = mongoose.model('Home' , homeSchema);