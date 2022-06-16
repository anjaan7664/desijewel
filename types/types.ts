export interface Designs {
    current_page: number;
    data:SingleDesign [];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: string;
      label: string;
      active: boolean;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  }
  export interface SingleDesign{
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
  }