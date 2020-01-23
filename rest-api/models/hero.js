const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HeroSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const Hero = mongoose.model('hero',HeroSchema);

module.exports = Hero;
