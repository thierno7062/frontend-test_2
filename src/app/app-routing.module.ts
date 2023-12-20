import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gesture',
    loadChildren: () => import('./gesture/gesture.module').then( m => m.GesturePageModule)
  },
  {
    path: 'audio-record',
    loadChildren: () => import('./pages/audio-record/audio-record.module').then( m => m.AudioRecordPageModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./pages/e-commerce/e-commerce.module').then( m => m.ECommercePageModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./pages/e-commerce/e-commerce.module').then( m => m.ECommercePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
