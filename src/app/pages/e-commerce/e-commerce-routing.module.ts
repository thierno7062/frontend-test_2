import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ECommercePage } from './e-commerce.page';

const routes: Routes = [
  {
    path: '',
    component: ECommercePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ECommercePageRoutingModule {}
