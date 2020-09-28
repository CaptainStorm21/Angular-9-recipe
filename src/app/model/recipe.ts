
export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  photo: string;
}

export class Recipe {
  public title: string;
  public description: string;
  public ingredients: Ingredient[];
  public instructions: Instruction[];
  public cover_photo: string;
  public feed_this_many: number; // num of people
  public preparation_time: number; //time in minutes
  constructor(
    t: string,
    d: string,
    ing: Ingredient[],
    ins: Instruction[],
    cp: string,
    ftm: number,
    pt: number
  )
  {
    this.title = t;
    this.description = d;
    this.ingredients = ing;
    this.instructions = ins;
    this.cover_photo = cp;
    this.feed_this_many = ftm;
    this.preparation_time = pt;
  }
}

// export class Recipe {
//   constructor(
//             public description: string,
//             public title: string,
//             public instructions: Instruction[],
//             public cover_photo: string)
// }