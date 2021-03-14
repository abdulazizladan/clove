import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//FlexLayout module
import { FlexLayoutModule } from '@angular/flex-layout';

import { PublicRoutingModule } from './public-routing.module';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [ItemComponent, ItemDetailComponent, ItemsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
