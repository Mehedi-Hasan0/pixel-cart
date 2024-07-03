type IRatings = {
  oneStar: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;
};

type IReviews = {
  buyerName: string;
  stars: string;
  reviewTime: string;
  message: string;
  images: string[];
};

export type IEvent = {
  id: string;
  name: string;
  productId: string[];
  sellerId: string[];
  eventTime: string;
};

// Product image should match the color code of the image color code
type IImage = {
  color: string;
  link: string;
};

export type IProduct = {
  _id: string;
  id: string;
  sellerId: string;
  title: string;
  brand?: string;
  price: number;
  quantity: number;
  category: string;
  images?: IImage[];
  discountedPrice?: number;
  discountPercent?: number;
  ratings?: IRatings;
  reviews?: IReviews[];
  productDetails: string;
  specification?: string;
  wishlist?: string[];
  warranty?: string;
  event?: IEvent;
  sku?: string;
  tags?: string;
  color?: string[];
  size?: string;
};
