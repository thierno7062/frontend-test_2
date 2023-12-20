import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.page.html',
  styleUrls: ['./e-commerce.page.scss'],
})
export class ECommercePage implements OnInit {

  categories: category[];

  slideOpt = {
    initialSlide: 0,
    spaceBetween: 0,
    direction: 'horizontal',
    slidesPerView: 2.8,
    slidesOffsetBefore: 6
  };
 /*  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    effect: slide,
    spaceBetween: 8,
    slidesPerView: 1.5,
    freeMode: true,
    loop: true
  };
 */
  constructor(private categoryService: CategoryService) {
    this.categories= this.categoryService.getCategories();
   }

  ngOnInit() {
  }


}
