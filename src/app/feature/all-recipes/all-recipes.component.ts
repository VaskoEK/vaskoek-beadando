import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/core/types/recipe.type';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  displayedRecipes: Recipe[] = [];

  errorMsg: string = '';

  searchedString: string = "";

  message: string = "";

  constructor( private readonly recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
          next: (res: Recipe[]) => {
            this.recipes = res;
            this.setRecipesToDisplay(this.recipes);
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            this.errorMsg = err.message;
          }
        })
    }


  searching(searchedString: string) {
      let match: Recipe[] = this.recipes.filter( item => item.name.toLocaleLowerCase().match(searchedString.toLocaleLowerCase()) );
      if (match.length > 0) {
        this.message = "";
        this.setRecipesToDisplay(match);
      }
      else {
        this.setRecipesToDisplay([]);
        this.message = "Nincs találat!";
      } 
    }
  
  private setRecipesToDisplay(recipes: Recipe[]) {
    this.displayedRecipes = recipes;
  }

};
