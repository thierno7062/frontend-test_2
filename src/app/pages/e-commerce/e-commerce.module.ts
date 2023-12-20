import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ECommercePageRoutingModule } from './e-commerce-routing.module';

import { ECommercePage } from './e-commerce.page';
import { HomeSlideHeaderModule } from 'src/app/components/home-slide-header/home-slide-header.module';
import { CategoryCardModule } from 'src/app/components/category-card/category-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ECommercePageRoutingModule,
    HomeSlideHeaderModule,
    CategoryCardModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [ECommercePage]
})
export class ECommercePageModule {}
