import { Recipe } from './../../model/recipe';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent{

  @Input()
  recipe: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  fireZoominEvent() {
    this.zoomIn.emit(this.recipe);
  }


}
