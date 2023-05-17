const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let foodSchema = new Schema({
  id: {
    type: Number
  },
  names: {
    type: String
  },
 products:{
    type: Object
 }    
}, {
    collection: 'food'
  })

module.exports = mongoose.model('food', foodSchema)