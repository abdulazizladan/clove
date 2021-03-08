import { Injectable, PreconditionFailedException } from '@nestjs/common';
import { Product } from './entity/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[];

  insertProduct(name: string, description: string, unit: string, unit_price: number) {
    return 'Product added successfully';
  }

  getProducts() {
    return [...this.products];
  }
}
