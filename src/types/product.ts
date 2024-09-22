export type  Product ={
    _id: string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    images: string[];
  }
 export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }