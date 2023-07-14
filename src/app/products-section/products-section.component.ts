import { Component, OnInit, Output} from '@angular/core';
import {
  DUMMYPRODUCTS as fetchedHandles,
  categories,
  Category,
  Product,
} from '../all-products';


@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css'],
})
export class ProductsSectionComponent implements OnInit {
  handleCategories!: Category[];
  handles!: Product[];

  filteredHandles:Product[]=[]

  ngOnInit(): void {
    this.handleCategories = categories;

    this.handles = fetchedHandles;

    this.getProducts(1);

  }

  getProducts(selectedCategoryId: number) {
    this.filteredHandles = this.handles.filter(
      (product) => product.categoryId === selectedCategoryId
    );

  }
}
