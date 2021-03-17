import { Injectable } from '@angular/core';
import shortId from 'shortid';
import { Category } from '../models/common';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public selectedCategories: Category[];
  public catergories: Category[] = [
    {
      name: 'Armenian',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'assets/tata-vaxenum-em.mp3',
          point: 30
        },
        {
          id: shortId(),
          src: 'song2',
          point: 50
        },
        {
          id: shortId(),
          src: 'song3',
          point: 40
        },
        {
          id: shortId(),
          src: 'song4',
          point: 70
        },
        {
          id: shortId(),
          src: 'song5',
          point: 60
        }
      ]
    },
    {
      name: 'Rock',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 60
        },
        {
          id: shortId(),
          src: 'song2',
          point: 50
        },
        {
          id: shortId(),
          src: 'song3',
          point: 40
        },
        {
          id: shortId(),
          src: 'song4',
          point: 30
        },
        {
          id: shortId(),
          src: 'song5',
          point: 70
        }
      ]
    },
    {
      name: 'Hip Hop',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 30
        },
        {
          id: shortId(),
          src: 'song2',
          point: 50
        },
        {
          id: shortId(),
          src: 'song3',
          point: 70
        },
        {
          id: shortId(),
          src: 'song4',
          point: 60
        },
        {
          id: shortId(),
          src: 'song5',
          point: 40
        }
      ]
    },
    {
      name: 'Classic',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 30
        },
        {
          id: shortId(),
          src: 'song2',
          point: 60
        },
        {
          id: shortId(),
          src: 'song3',
          point: 50
        },
        {
          id: shortId(),
          src: 'song4',
          point: 40
        },
        {
          id: shortId(),
          src: 'song5',
          point: 70
        }
      ]
    },
    {
      name: 'Rap',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 70
        },
        {
          id: shortId(),
          src: 'song2',
          point: 30
        },
        {
          id: shortId(),
          src: 'song3',
          point: 50
        },
        {
          id: shortId(),
          src: 'song4',
          point: 40
        },
        {
          id: shortId(),
          src: 'song5',
          point: 60
        }
      ]
    },
    {
      name: 'Old Songs',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 60
        },
        {
          id: shortId(),
          src: 'song2',
          point: 30
        },
        {
          id: shortId(),
          src: 'song3',
          point: 50
        },
        {
          id: shortId(),
          src: 'song4',
          point: 70
        },
        {
          id: shortId(),
          src: 'song5',
          point: 40
        }
      ]
    },
    {
      name: 'Old Songs',
      id: shortId(),
      songs: [
        {
          id: shortId(),
          src: 'song1',
          point: 30
        },
        {
          id: shortId(),
          src: 'song2',
          point: 50
        },
        {
          id: shortId(),
          src: 'song3',
          point: 70
        },
        {
          id: shortId(),
          src: 'song4',
          point: 40
        },
        {
          id: shortId(),
          src: 'song5',
          point: 60
        }
      ]
    }
  ];

  constructor() { }

  public getAllCategories(): Category[] {
    return this.catergories;
  }
}
