import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapDirective } from './tap/tap.directive';
import { PressDirective } from './press/press.directive';
import { SwipeDirective } from './swipe/swipe.directive';



@NgModule({
  declarations: [
    TapDirective,
    PressDirective,
    SwipeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TapDirective,
    PressDirective
  ]
})
export class DirectivesModule { }
