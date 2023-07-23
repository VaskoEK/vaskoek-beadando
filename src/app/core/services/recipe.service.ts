import { Injectable } from '@angular/core';
import { RecipeHttpService } from './recipe-http.service';
import { Recipe } from '../types/recipe.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly recipeHttp: RecipeHttpService;

  constructor(recipeHttp: RecipeHttpService) {
    this.recipeHttp = recipeHttp; 
  }

  getRecipes(): Observable<Recipe[]> {
    return this.recipeHttp.getRecipes();
  }

  getRecipesByIds(ids: number[]): Observable<Recipe[]> {
    return this.recipeHttp.getRecipesByIds(ids);
  }
  
}
