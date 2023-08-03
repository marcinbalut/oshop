import { Component, OnInit } from '@angular/core';
import { FakeRepository } from 'src/app/data/fake-repository.service';
import { Product } from 'src/app/data/models/product';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

  allProducts: Product[];
  filteredProducts: Product[];
  
  constructor(private repo: FakeRepository) {
    this.allProducts = this.repo.getAllProducts();
    this.filteredProducts = this.allProducts;

  }
  ngOnInit(): void {
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.allProducts.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.allProducts;
  }
}
