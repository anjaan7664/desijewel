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
  id: number;
  category: string;
  dpname: string;
  sub_category: string;
  dp: number;
  comment: string;
  path: string;
  image: string;
  img_type: string;
  tag: string;
  user: string;
  admin: string;
  weight: string;
  hit: number;
  date: string;
  alt: string;
  alt_hn: string;
  logo: number;
  updated_at: string;
  title: string;
  design_code: string;
};
