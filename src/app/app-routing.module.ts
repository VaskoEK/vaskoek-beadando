import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { AllRecipesComponent } from './feature/all-recipes/all-recipes.component';
import { RecipeComponent } from './feature/recipe/recipe.component';

const routes: Routes = [
  { 
    path: "recipeList",
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
  { path: '',  // ha semmmit nem ír be, irányítson rá a home-ra
    redirectTo: '/recipeList',
    pathMatch: 'full'  // ezt ide kell írni a redirectTo miatt
  },
  {
    path: '**',  // ha bármi az url, irányítson rá a home-ra
    redirectTo: '/recipeList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
