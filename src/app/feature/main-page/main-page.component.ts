import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/core/types/recipe.type';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  recipes: Recipe[] = [];
  categories: string[] = [];

  constructor( private readonly recipeService: RecipeService, private router: Router, private readonly favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
      // filter the categories
      this.categories = this.recipes.map(recipe => recipe.category).filter((value, index, array) => {return array.indexOf(value)===index});

      
    })
  };

  navigateToRecipe(recipe: Recipe) {
    this.router.navigate(['recipe', recipe.id]);
  }

  addToFavorites(recipe: Recipe) {
    this.favoritesService.saveRecipeToFavorites(recipe);
  }

  deleteFromFavorites(recipe: Recipe) {
    this.favoritesService.deleteRecipeFromFavorites(recipe);
  }

}
