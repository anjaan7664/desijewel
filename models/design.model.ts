import mongoose, { model, models, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";
 interface IDesign extends mongoose.Document{
  _id: string;
  url: {
    path: string;
    image: string;
    img_type: string;
  };
  info: {
    category: string;
    sub_category: string;
    dp: string;
  };
  extra: {
    weight: string | number;
    hit: number | string;
  };
  alt: {
    en: string;
    hi: string;
  };
  meta: {
    title: string;
    code: string;
    tag: string;
  };
  comment: {};
}

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
type designDocument = IDesign & mongoose.Document;

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
