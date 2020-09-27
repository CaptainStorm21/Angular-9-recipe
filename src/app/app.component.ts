import { Recipe } from './model/recipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe: Recipe;
  constructor() {
    this.recipe = new Recipe(
      'Banana Bread',
      'Banana bread. Qui amet duis sunt pariatur qui.',
      null,
      null,
      null)
  }
}
