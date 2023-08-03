import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FakeRepository } from 'src/app/data/fake-repository.service';
import { Category } from 'src/app/data/models/category';
import { Product } from 'src/app/data/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product: Product = { id: '', title: '', price: 0, category: '', imageUrl: '' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repo: FakeRepository) {

      let id = this.route.snapshot.paramMap.get('id');
      if(id) {
        this.product = this.repo.getProduct(id);
      }
    }

  get categories(): Category[] {
    return this.repo.getAllCategories();
  }

  saveProduct(product: Product) {
    product.id = this.product.id;
    this.repo.saveProduct(product);
    this.router.navigate(['/admin/products']);
  }
  
  deleteProduct() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.repo.deleteProduct(this.product.id);
      this.router.navigate(['/admin/products']);
    }
  }

}
