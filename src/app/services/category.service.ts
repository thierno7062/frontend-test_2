import { Injectable } from '@angular/core';
import { category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategories(): category[] {
    return [
      {
        title: 'Men',
        image: 'assets/men.jpg'
      },
      {
        title: 'Women',
        image: 'assets/women.jpg'
      },
      {
        title: 'Kids',
        image: 'assets/baby.jpg'
      },
      {
        title: 'Home',
        image: 'assets/home.jpg'
      },
    ]
  }
}



