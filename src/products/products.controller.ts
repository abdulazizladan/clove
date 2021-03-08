import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return prodId;
  }

  @Post()
  addProduct(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return 'Successfully added' + name + ' ' + description + '.';
  }

  @Delete(':id')
  removeProduct() {
    return 'removing product';
  }
}
