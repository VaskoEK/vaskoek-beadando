import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { AllRecipesComponent } from './feature/all-recipes/all-recipes.component';
import { RecipeComponent } from './feature/recipe/recipe.component';
import { FavoritesComponent } from './feature/favorites/favorites.component';

const routes: Routes = [
  { 
    path: "mainPage",
    component: MainPageComponent
  },
  {
    path: "allRecipes",
    component: AllRecipesComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  { 
    path: '',
    redirectTo: '/mainPage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/mainPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
