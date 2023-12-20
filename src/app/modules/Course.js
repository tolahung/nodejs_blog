
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
// const slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, required:true,  maxLength: 255},
  des: {type: String, maxLength: 600},
  image: {type:String, maxLength:255},
  video: {type:String,required:true, maxLength:255},
  level: {type:String, maxLength:255},
  slug: {type: String, slug: 'name'},
}, {timestamps: true});

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);  