import { Schema, model, models } from "mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');
const designSchema = new Schema({
  id: Number,
  category: String,
  dpname: String,
  sub_category: String,
  dp: Number,
  comment: String,
  path: String,
  image: String,
  img_type: String,
  tag: String,
  user: String,
  admin: String,
  weight: String,
  hit: Number,
  date: String,
  alt: String,
  alt_hn: String,
  logo: Number,
  updated_at: String,
  title: String,
  design_code: String,
});
designSchema.plugin(mongoosePaginate);
const Design = models.Design || model("Design", designSchema);

export default Design;
