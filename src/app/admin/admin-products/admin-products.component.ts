import { Component, OnInit } from '@angular/core';
import { FakeRepository } from 'src/app/data/fake-repository.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{
  
  constructor(private repo: FakeRepository) {}
  ngOnInit(): void {
    this.repo.getAllProducts();
  }

  get products() {
    return this.repo.getAllProducts();
  }
}
