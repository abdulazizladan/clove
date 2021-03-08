import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    ShopsModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
