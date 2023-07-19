import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeMockService } from './recipe-mock.service';
import { Recipe } from '../types/recipe.type';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {

  constructor(private readonly http: HttpClient, private readonly mock: RecipeMockService) { }

  getRecipes(): Observable<Recipe[]> {
    if (environment.mockAPI) {
      return this.mock.getRecipes();
    }
    else {
      return this.getRequest(environment.apiUrl);
    }
  }

  private getRequest(path: string): Observable<any> {
    return this.http.get(path);
  }
}
