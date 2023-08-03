import { Component } from '@angular/core';
import { FakeRepository } from 'src/app/data/fake-repository.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(private repo: FakeRepository) {}

  get products() {
    return this.repo.getAllProducts();
  }
}
