import mongoose, { model, PaginateModel } from "mongoose";
import { SingleDesign } from "@/types/designData.types";
import paginate from "mongoose-paginate-v2";


export const designSchema = new mongoose.Schema({
  url: {
    path: String,
    image: String,
    img_type: String,
  },
  info: {
    category: String,
    sub_category: String,
    dp: String,
    metal: String,
  },
  extra: {
    weight:  Number || String,
    hit :Number || String,
  },
  alt: {
    en: String,
    hi: String,
  },
  meta: {
    title: String,
    code: String,
    tag: String,
  },
  comment: {}
});

designSchema.plugin(paginate);
type designDocument = SingleDesign & mongoose.Document;

let Design: PaginateModel<designDocument>
try {
  // Throws an error if 'Name' hasn't been registered
  Design = model('Design') as PaginateModel<designDocument>;
} catch (e) {
  Design = model<designDocument, PaginateModel<designDocument>>(
    "Design",
    designSchema
  );
}
export default Design;
