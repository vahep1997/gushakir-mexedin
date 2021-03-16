import { Component, OnInit } from '@angular/core';
import { Category } from './models/common';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gushakir-mexedin';
  public categories: Category[];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
  }

}
