import { Injectable } from '@angular/core';
import { Recipe } from '../types/recipe.type';
import { RecipeService } from './recipe.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private readonly recipeService: RecipeService) { }

  saveRecipeToFavorites(recipe: Recipe) {
    let ids: number[] = [];
    let favoritesStr: string = localStorage.getItem("favorites");
    if (favoritesStr != null) {
      ids = JSON.parse(favoritesStr);  // stringből kiolvassa és visszaalakítja array-jé (adattá)
    }
    ids.push(recipe.id);
    localStorage.setItem("favorites", JSON.stringify(ids));
  }

  deleteRecipeFromFavorites(recipe: Recipe) {
    let favoritesStr: string = localStorage.getItem("favorites");
    if (favoritesStr != null) {
      let ids: number[] = JSON.parse(favoritesStr);
      let foundRecipeIdIndex = ids.findIndex(value => value == recipe.id);
      if (foundRecipeIdIndex >= 0) {
        ids.splice(foundRecipeIdIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(ids));
      }
    } 
  }

  getAllRecipesFromFavorites(): Observable<Recipe[]> {
    let favoritesStr: string = localStorage.getItem("favorites");
    if (favoritesStr != null) {
      let ids: number[] = JSON.parse(favoritesStr);
      return this.recipeService.getRecipesByIds(ids);
    }
    return of([]);
  }

  getRecipeIdsFromFavorites(): number[] {
    let favoritesStr: string = localStorage.getItem("favorites");
    if (favoritesStr != null) {
      let ids: number[] = JSON.parse(favoritesStr);
      return ids;
    }
    return [];
  }
}
