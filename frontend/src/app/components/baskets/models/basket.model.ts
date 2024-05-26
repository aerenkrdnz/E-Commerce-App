import { ProductModel } from "../../products/models/product.model";

export class BasketModel{
    _id: String = "";
    userId: String = "";
    productId: String = "";
    products: ProductModel[] = [];
    price: number = 0;
    quantity: number = 1;
}