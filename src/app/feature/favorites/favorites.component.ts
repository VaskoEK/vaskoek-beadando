import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { Recipe } from 'src/app/core/types/recipe.type';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  recipes: Recipe[] = [];

  errorMsg: string = '';

  constructor(private readonly favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.getAllRecipesFromFavorites().subscribe({
      next: (res: Recipe[]) => {
        this.recipes = res;
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.errorMsg = err.message;
      }
    })
  }
}
