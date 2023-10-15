type Color = {
  id: number;
  color: string;
  inStock: boolean;
  code: string;
  product: { data: Product } | null;
};

type Size = {
  id: number;
  size: number;
  inStock: boolean;
};

type Images = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  }[];
};

type Characteristics = {
  id: number;
  property: string;
  value: string;
};

type Categories = {
  data: Category[];
};

type ProductAttributes = {
  name: string;
  article: string;
  color: string;
  colorCode?: string;
  description?: string;
  price: number;
  old_price?: number;
  slug: string;
  isDiscounted: boolean;
  characteristics?: Characteristics[];
  size: Size[];
  colors?: Color[];
  images: Images;
  categories: Categories;
  publishedAt: string | null;
}

type Product = {
  id: number;
  attributes: ProductAttributes;
};

type Category = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    type: "clothes" | "shoes";
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    products?: {
      data: Product[];
    };
  };
};

type Banner = {
  id: number;
  attributes: {
    slug: string;
    name: string;
    url?: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};

type CartItem = {
  id: number;
  name: string;
  imageUrl?: string;
  selectedSize: number;
  article: string;
  price: number;
  slug: string;
  count: number;
};

type ProductCard = {
  slug: string;
  imageUrl: string;
  name: string;
  price: number;
  oldPrice?: number;
};

type OrderItem = {
  selectedSize: number;
  slug: string;
  count: number;
};
