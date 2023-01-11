import { Injectable } from '@angular/core';
import { Recetteclass } from '../liste-recette/recetteclass';
import Recettes from '../../assets/listeJson-recettes.json';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

constructor() { }

  getListeRecette(): Observable<Recetteclass[]> {
    var listeRecette: Recetteclass[] = [];
    for (var i = 0; i < Recettes.length; i++ )
    {
      var newRecette = Recettes[i];
      var newId = newRecette.id;
      var newName = newRecette.nom;
      var newRecetteInstance = new Recetteclass(newId, newName);
      listeRecette.push(newRecetteInstance);
    }
    return of(listeRecette);
  }

  getRecette(id: number | string) {

    return this.getListeRecette().pipe(
      // (+) before `id` turns the string into a number
      map((listeRecette: Recetteclass[]) => listeRecette.find(recette => recette.id === +id)!)
    );
  }


}
