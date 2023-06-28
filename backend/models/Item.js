import mongoose, { model } from "mongoose";
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
   name:{
    type: String,
    required: true
  },
  date:{
    type : Date,
    default : Date.now
  }
});

const Item = model('items',ItemSchema);

export default Item;