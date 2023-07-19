import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/core/types/recipe.type';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  id: number = -1;
  recipe: Recipe | null | undefined = null;
  recipes: Recipe[] | null = null;

  constructor(private actRoute: ActivatedRoute, private readonly recipeService: RecipeService) {}

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.params['id'];

    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
      this.recipe = this.recipes.find((recipe) => recipe.id == this.id);
    })
    
  }   

}
