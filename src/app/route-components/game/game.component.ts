import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public categories: Category[];
  public sound = null;
  public isSongPlaying: boolean;
  public selcetedCategory: Category;
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.selectedCategories;
    if (!this.categories) {
      this.categories = JSON.parse(localStorage.getItem('categories'));
    }
    console.log(this.categories);
  }

  newGame(): void {
    this.router.navigate(['categories']);
  }

  playSong(categoryId: string, songId: string): void {
    // this.selcetedCategory = this.categories.find(ctg => ctg.id === categoryId);
    // this.categories.map(ctg => ctg.isPlaying = false);
    // this.selcetedCategory.isPlaying = true;
    // const selectedSong = this.selcetedCategory.songs.find(song => song.id === songId);

    // this.stopPlaying();

    // if (!selectedSong.isPlaying) {
    //   this.sound = new Howl({
    //     src: [selectedSong.src]
    //   });
    //   this.sound.play();
    //   selectedSong.isPlaying = true;
    // }

  }

  stopPlaying(): void {
    // if (this.sound) {
    //   this.sound.stop();
    //   this.categories.forEach(category => {
    //     category.songs.map(song => song.isPlaying = false);
    //   });
    // }
  }
}
