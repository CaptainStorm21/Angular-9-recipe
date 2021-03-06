import { Component} from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipe_in_progress: Recipe;
  use_dark_background: boolean;

  current_css_classes = {
    yellowBg: false
  };

  title_text_color = 'red';
  current_css_styles = {
    color: 'purple',
    backgroundColor: 'green',
    padding: '10px'
  }

  /*multiple recipes*/
  recipes: Recipe[];

  constructor() {

    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      new Recipe(
        'Banana Bread',
        'Qui Banana bread amet duis sunt pariatur qui.Consequat exercitation officia eu in eu laborum esse. Amet veniam duis consequat proident incididunt id fugiat. Tempor exercitation sint dolor Lorem esse. Cillum reprehenderit aliquip tempor dolore nulla non do esse eiusmod. Anim nisi proident magna qui id velit voluptate et reprehenderit. Occaecat non est proident duis sint et magna in aliquip dolore nostrud exercitation velit nostrud. Aliquip voluptate duis est dolore adipisicing labore esse.',
        4,
        60,
        null,
        null,
        null
      ),
      new Recipe(
        'Apple Pie',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor magna eu sapien ullamcorper, at sollicitudin risus sodales. Maecenas elementum pulvinar gravida. Nam imperdiet luctus tempus. Ut non interdum leo. Maecenas at auctor nisi. Curabitur nec sapien et ligula eleifend fermentum et in neque. Suspendisse in consectetur elit. Etiam ac ex lorem. Nulla urna lacus, tempor at elit at, tristique ullamcorper lectus. Donec mattis dignissim sem, eget lacinia arcu mattis sit amet. Nulla pellentesque elit nec leo egestas, id commodo orci sagittis. Phasellus maximus augue nunc. Vestibulum quis tellus metus. Cras feugiat massa quis diam tristique facilisis. Curabitur fringilla urna vitae pulvinar ultrices.',
        6,
        30,
        null,
        null,
        null
      ),
      new Recipe(
        'Strawberry Ice Cream',
        'Nam maximus, mauris nec consequat viverra, ligula arcu ultricies neque, a rhoncus erat felis ac leo. Pellentesque viverra dui vel erat sagittis, et dignissim quam efficitur. Cras sed nulla turpis. Aliquam erat volutpat. Curabitur ac mattis erat. Phasellus sit amet ex massa. Nam eu justo quam. Duis a urna eu libero blandit luctus. Praesent commodo neque eu consequat tincidunt. Nunc nulla sem, tristique in gravida a, convallis euismod tortor. Etiam lobortis enim a cursus varius. Nullam blandit ac dolor eget iaculis.',
        8,
        160,
        null,
        null,
        null
      ),
      new Recipe(
        'Mulberry Ice Cream',
        'Nam maximus, mauris nec consequat viverra, ligula arcu ultricies neque, a rhoncus erat felis ac leo. Pellentesque viverra dui vel erat sagittis, et dignissim quam efficitur. Cras sed nulla turpis. Aliquam erat volutpat. Curabitur ac mattis erat. Phasellus sit amet ex massa. Nam eu justo quam. Duis a urna eu libero blandit luctus. Praesent commodo neque eu consequat tincidunt. Nunc nulla sem, tristique in gravida a, convallis euismod tortor. Etiam lobortis enim a cursus varius. Nullam blandit ac dolor eget iaculis.',
        4,
        60,
        null,
        null,
        null
      )
    ];
  }

  addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  recipeZoomIn(recipe: Recipe): void {
    console.log(JSON.stringify(recipe, null, 2));
  }

  // use_dark_background: boolean;
  // toggleDarkBackground() :void {
  //   this.use_dark_background = !this.use_dark_background;
  // }


  toggleDarkBackground():void {
    this.current_css_classes.yellowBg = !this.current_css_classes.yellowBg;
  }

  // toggleTitleColor(): void{
  //   if ( this.title_text_color === 'red') {
  //     this.title_text_color = 'black';
  //   } else {
  //     this.title_text_color = 'red';
  //   }
  // }

  toggleTitleColor(): void{
    if ( this.current_css_styles.color === 'purple') {
      this.current_css_styles.color = 'yellow';
    } else {
      this.current_css_styles.color = 'purple';
    }
  }
}



/*
single recipe
  // recipe: Recipe;
  // constructor() {
  //   this.recipe = new Recipe(
  //     'Banana Bread',
  //     'Qui Banana bread amet duis sunt pariatur qui.Consequat exercitation officia eu in eu 
  //    laborum esse. Amet veniam duis consequat proident incididunt id fugiat. Tempor exercitation 
  //    sint dolor Lorem esse. Cillum reprehenderit aliquip tempor dolore nulla non do esse eiusmod. 
  // Anim nisi proident magna qui id velit voluptate et reprehenderit. 
  // Occaecat non est proident duis sint et magna in aliquip dolore nostrud exercitation velit nostrud. 
  //Aliquip voluptate duis est dolore adipisicing labore esse.',
  //     null,
  //     null,
  //     null)
  // }
*/