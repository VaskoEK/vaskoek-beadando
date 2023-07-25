import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { AllRecipesComponent } from './feature/all-recipes/all-recipes.component';
import { RecipeComponent } from './feature/recipe/recipe.component';
import { FormsModule } from '@angular/forms';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';
import { FavoritesComponent } from './feature/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AllRecipesComponent,
    RecipeComponent,
    StickyMenuComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
