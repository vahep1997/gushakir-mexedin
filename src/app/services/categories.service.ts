import { Injectable } from '@angular/core';
import shortId from 'shortid';
import { Category } from '../models/common';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public catergories: Category[] = [
    {
      name: 'Armenian',
      id: shortId()
    },
    {
      name: 'Rock',
      id: shortId()
    },
    {
      name: 'Hip Hop',
      id: shortId()
    },
    {
      name: 'Classic',
      id: shortId()
    },
    {
      name: 'Rap',
      id: shortId()
    },
    {
      name: 'Old Songs',
      id: shortId()
    },
  ];

  constructor() { }

  public getAllCategories(): Category[] {
    return this.catergories;
  }
}
