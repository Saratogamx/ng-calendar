import { IProduct } from 'src/app/products/product.model';

export interface IDetail {
    id: number;
    quantity: number;
    productId: number;
    product: IProduct[];
}
