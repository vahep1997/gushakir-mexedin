import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './route-components/categories/categories.component';
import { GameComponent } from './route-components/game/game.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
