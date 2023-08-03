import { Injectable } from '@angular/core';
import { Category } from './models/category';
import { Product } from './models/product';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FakeRepository {

  constructor() {
    if(localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  private categories = [
    { id: 'bread', name: 'Bread' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'seasonings', name: 'Seasonings and Spices' },
    { id: 'vegetables', name: 'Vegetables' }
  ];

  private products: Product[] = [
    { id: '1', title: 'Orange', price: 0.99, category: 'fruits', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg'},
    { id: '2', title: 'Apple', price: 5.99, category: 'fruits', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'},
    { id: '3',  title: 'Freshly Baked Bread', price: 2.99, category: 'bread', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg'},
    { id: '4', title: 'Milk', price: 1.99, category: 'dairy', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Glass_of_Milk_%2833657535532%29.jpg'}
  ];

  getAllCategories(): Category[] {
    return this.categories;
  }

  getAllProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products'));  
  }

  getProduct(id: string): Product {
    let prods = this.getAllProducts();
    return prods.find( p => p.id === id);
  }

  createNewProduct(product: Product) {
    if(localStorage.getItem('products') !== null) {     
          let prods = this.getAllProducts();
          product.id = uuidv4();
          prods.push(product);      
          localStorage.setItem('products', JSON.stringify(prods));
    }
  }
}

