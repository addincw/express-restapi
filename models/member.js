const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: { type: String, required: true },  
  gender: { type: String, required: true },  
  age: { type: Number, required: true },
  hobbies: Array,
  domicile: Object,
  join_date: { type: Date, default: Date.now }  
})

module.exports = mongoose.model('member', schema)