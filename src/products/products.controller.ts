import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    return 'products';
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
