import { Component, OnInit } from '@angular/core';
import { Recetteclass } from './recetteclass';
import Recettes from '../../assets/listeJson-recettes.json';
import {Router} from "@angular/router";
import { RecetteService } from './recette.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recettes',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent implements OnInit {

  searchedText!: string;
  listeRecetteFile: Recetteclass[] = [];
  //listeRecetteFile: Observable<Recetteclass[]>;

  constructor(private router: Router, private recetteService: RecetteService) { }

  ngOnInit() {

    //var recetteObj : Recetteclass = Recetteclass.fromJSON(Recettes.toString());
    var listeRecetteFileObs = this.recetteService.getListeRecette();

    this.recetteService.getListeRecette()
    .subscribe(recette => {
        this.listeRecetteFile = recette as Recetteclass[]
    })

    /*
    for (var i = 0; i < Recettes.length; i++)
    {
      var nouvRecette: Recetteclass = new Recetteclass(Recettes[i].id, Recettes[i].nom);
      nouvRecette.id = Recettes[i].id;
      nouvRecette.name = Recettes[i].nom;
      nouvRecette.description = Recettes[i].description;

      this.listeRecetteFile.push(nouvRecette);
    }
    */

  }

  openRecette(event: any)
  {
    // 1 - Récupération de l'index de la recette dans la liste
    this.router.navigate(['/recette'])
  }

}
