import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';
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

  searchOnlyInFavorites: boolean = false;

  constructor( 
    private readonly recipeService: RecipeService, 
    private readonly favoritesService: FavoritesService
  ) { }

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
      let match2: Recipe[] = this.recipes.filter( item => item.category.toLocaleLowerCase().match(searchedString.toLocaleLowerCase()) );
      
      // merge the arrays:
      Array.prototype.push.apply(match,match2);
      // with just the unique elements:
      match = match.filter(function (x, i, a) { 
          return a.indexOf(x) == i; 
      });

      if (this.searchOnlyInFavorites) {
          let ids = this.favoritesService.getRecipeIdsFromFavorites();
          match = match.filter(recipe => ids.includes(recipe.id));
      }

      console.log(match);  // final merged result will be in the 1st array

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

  addToFavorites(recipe: Recipe) {
    this.favoritesService.saveRecipeToFavorites(recipe);
  }

  deleteFromFavorites(recipe: Recipe) {
    this.favoritesService.deleteRecipeFromFavorites(recipe);
  }

};
