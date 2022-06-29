import mongoose, { model, models, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
export interface IDesign {
  id: Number;
  category: String;
  dpname: String;
  sub_category: String;
  dp: Number;
  comment: String;
  path: String;
  image: String;
  img_type: String;
  tag: String;
  user: String;
  admin: String;
  weight: String;
  hit: Number;
  date: String;
  alt: String;
  alt_hn: String;
  logo: Number;
  updated_at: String;
  title: String;
  design_code: String;
}

export const designSchema = new mongoose.Schema({
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

designSchema.plugin(paginate);
type designDocument = IDesign & mongoose.Document;

let Design;
try {
  // Throws an error if 'Name' hasn't been registered
  Design = models.Design;
} catch (e) {
  Design = model<designDocument, PaginateModel<designDocument>>(
    "Design",
    designSchema
  );
}
export default Design;
