export type DataType = {
  id: number;
  title: string;
  category: string;
  price: string;
  isFavorite: string;
  createdAt: string;
  theme: string;
  tier: string;
  imageId: string;
  author: AuthorDataType;
};

export type AuthorDataType = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
};

export type MetaType = {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tier?: string;
  theme?: string;
  lastItemId?: number;
  sortBy?: string[];
  sortDirection?: string[];
  limit?: number;
};

export type ProductMetadataType = {
  categories?: string[];
  themes?: string[];
  tiers?: string[];
};
