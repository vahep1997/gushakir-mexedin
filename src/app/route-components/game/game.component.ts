import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Song } from 'src/app/models/common';
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
  public selectedSong: Song;

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
    this.selcetedCategory = this.categories.find(ctg => ctg.id === categoryId);
    this.selectedSong = this.selcetedCategory.songs.find(song => song.id === songId);
    this.sound = new Howl({
      src: [this.selectedSong.src]
    });
    this.sound.play();
    this.isSongPlaying = true;
    this.selectedSong.isPlaying = true;
    this.selectedSong.isPlayed = true;
  }

  stopPlaying(): void {
    this.sound.stop();
    this.isSongPlaying = false;
    this.selectedSong.isPlaying = false;

  }

  handleSinging(categoryId, songId): void {
    if (this.isSongPlaying) {
      this.stopPlaying();
    } else {
      this.playSong(categoryId, songId);
    }
  }
}
