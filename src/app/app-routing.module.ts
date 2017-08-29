import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RecipesComponent} from './recipe/recipes/recipes.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeFormComponent} from './recipe/recipe-form/recipe-form.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent, canActivate: [AuthGuard] },
  { path: 'add-recipe', component: RecipeFormComponent, canActivate: [AuthGuard] },
  { path: 'edit-recipe/:id', component: RecipeFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
