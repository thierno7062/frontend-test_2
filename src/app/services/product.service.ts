import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

@Injectable({
    providedIn: 'root'
  })


export class ServiceNameService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Product[]{
    return[
      {
        id: 1,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 2,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 3,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 4,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 5,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 6,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 7,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 8,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 9,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 10,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
      {
        id: 11,
        name: 'girl Black Dress',
        price: 15.36,
        imageUrl:'https://i.pravatar.cc/320',
        liked:false,
      },
    ];
  }

  getFeaturedProducts(): Product[]{
    return this.getProducts().slice(3, 8);
  }

  getBestSellingProducts(): Product[]{
    return this.getProducts().slice(0, 5);
  }
}
