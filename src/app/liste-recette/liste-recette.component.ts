import { Component, OnInit } from '@angular/core';
import { Recetteclass } from './recetteclass';
import Recettes from '../../assets/listeJson-recettes.json';


@Component({
  selector: 'app-recettes',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent implements OnInit {

  listeRecetteFile: Recetteclass[] = [];

  constructor() { }

  ngOnInit() {

    debugger;
    for (var i = 0; i < Recettes.length; i++)
    {
      var nouvRecette: Recetteclass = new Recetteclass();
      nouvRecette.name = Recettes[i].nom;
      this.listeRecetteFile.push(nouvRecette);
    }

  }

}
