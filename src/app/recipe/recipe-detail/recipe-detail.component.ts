import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .map((params: ParamMap) => params.get('id'))
      .switchMap(id => this.recipeService.getRecipe(id))
      .subscribe(recipe => this.recipe = recipe);
  }

  edit(): void {
    this.router.navigateByUrl(`edit-recipe/${this.recipe._id}`);
  }

  getTime(recipe): string {
    let result = 'undefined';
    let minutes = 0;
    for (const instruction of recipe.instructions) {
      minutes += instruction.time;
    }
    if (minutes > 0) {
      result = minutes > 60 ? `${Math.floor(minutes / 60)} h ${minutes % 60} min` : `${minutes} min`;
    }
    return result;
  }

}
