import { Component, OnInit } from '@angular/core';
import { Recetteclass } from './recetteclass';
import Recettes from '../../assets/listeJson-recettes.json';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recettes',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent implements OnInit {

  listeRecetteFile: Recetteclass[] = [];

  constructor(private router: Router) { }

  ngOnInit() {

    //var recetteObj : Recetteclass = Recetteclass.fromJSON(Recettes.toString());

    for (var i = 0; i < Recettes.length; i++)
    {
      var nouvRecette: Recetteclass = new Recetteclass(Recettes[i].nom, Recettes[i].categorie ,Recettes[i].duree);
      nouvRecette.name = Recettes[i].nom;
      this.listeRecetteFile.push(nouvRecette);
    }

  }

  openRecette(event: any)
  {
    // 1 - Récupération de l'index de la recette dans la liste
    debugger;
    this.router.navigate(['/recette'])
  }

}
