import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CategoryCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategoryCardComponent],
})
export class CategoryCardModule{}
