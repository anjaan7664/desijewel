export interface Designs {
  docs: SingleDesign[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}
export type SingleDesign = {
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
    metal: string;
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
};
