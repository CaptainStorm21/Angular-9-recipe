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
      'Qui Banana bread amet duis sunt pariatur qui.Consequat exercitation officia eu in eu laborum esse. Amet veniam duis consequat proident incididunt id fugiat. Tempor exercitation sint dolor Lorem esse. Cillum reprehenderit aliquip tempor dolore nulla non do esse eiusmod. Anim nisi proident magna qui id velit voluptate et reprehenderit. Occaecat non est proident duis sint et magna in aliquip dolore nostrud exercitation velit nostrud. Aliquip voluptate duis est dolore adipisicing labore esse.',
      null,
      null,
      null)
  }
}
