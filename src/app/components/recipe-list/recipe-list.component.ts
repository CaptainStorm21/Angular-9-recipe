import { Component} from '@angular/core';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  /*multiple recipes*/
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      new Recipe(
        'Banana Bread',
        'Qui Banana bread amet duis sunt pariatur qui.Consequat exercitation officia eu in eu laborum esse. Amet veniam duis consequat proident incididunt id fugiat. Tempor exercitation sint dolor Lorem esse. Cillum reprehenderit aliquip tempor dolore nulla non do esse eiusmod. Anim nisi proident magna qui id velit voluptate et reprehenderit. Occaecat non est proident duis sint et magna in aliquip dolore nostrud exercitation velit nostrud. Aliquip voluptate duis est dolore adipisicing labore esse.',
        null,
        null,
        null,
        4,
        60
      ),
      new Recipe(
        'Apple Pie',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor magna eu sapien ullamcorper, at sollicitudin risus sodales. Maecenas elementum pulvinar gravida. Nam imperdiet luctus tempus. Ut non interdum leo. Maecenas at auctor nisi. Curabitur nec sapien et ligula eleifend fermentum et in neque. Suspendisse in consectetur elit. Etiam ac ex lorem. Nulla urna lacus, tempor at elit at, tristique ullamcorper lectus. Donec mattis dignissim sem, eget lacinia arcu mattis sit amet. Nulla pellentesque elit nec leo egestas, id commodo orci sagittis. Phasellus maximus augue nunc. Vestibulum quis tellus metus. Cras feugiat massa quis diam tristique facilisis. Curabitur fringilla urna vitae pulvinar ultrices.',
        null,
        null,
        null,
        6,
        30
      ),
      new Recipe(
        'Strawberry Ice Cream',
        'Nam maximus, mauris nec consequat viverra, ligula arcu ultricies neque, a rhoncus erat felis ac leo. Pellentesque viverra dui vel erat sagittis, et dignissim quam efficitur. Cras sed nulla turpis. Aliquam erat volutpat. Curabitur ac mattis erat. Phasellus sit amet ex massa. Nam eu justo quam. Duis a urna eu libero blandit luctus. Praesent commodo neque eu consequat tincidunt. Nunc nulla sem, tristique in gravida a, convallis euismod tortor. Etiam lobortis enim a cursus varius. Nullam blandit ac dolor eget iaculis.',
        null,
        null,
        null,
        8,
        160
      ),
      new Recipe(
        'Mulberry Ice Cream',
        'Nam maximus, mauris nec consequat viverra, ligula arcu ultricies neque, a rhoncus erat felis ac leo. Pellentesque viverra dui vel erat sagittis, et dignissim quam efficitur. Cras sed nulla turpis. Aliquam erat volutpat. Curabitur ac mattis erat. Phasellus sit amet ex massa. Nam eu justo quam. Duis a urna eu libero blandit luctus. Praesent commodo neque eu consequat tincidunt. Nunc nulla sem, tristique in gravida a, convallis euismod tortor. Etiam lobortis enim a cursus varius. Nullam blandit ac dolor eget iaculis.',
        null,
        null,
        null,
        4,
        60
      )
    ];
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