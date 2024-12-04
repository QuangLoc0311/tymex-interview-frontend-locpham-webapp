export type DataType = {
  id: number;
  title: string;
  category: string;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: string;
  tier: string;
  imageId: number;
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
