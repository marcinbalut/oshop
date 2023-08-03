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

  product: Product = { id: '', title: '', price: 0, category: '', imageUrl: '' };//'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'};

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

  saveNewProduct(product: Product) {
    this.repo.createNewProduct(product);
    this.router.navigate(['/admin/products']);
  }

}
