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

  onSearchChange(): void {

    // On réinitialise la liste des recettes à partir du fichier
    this.recetteService.getListeRecette()
    .subscribe(recette => {
        this.listeRecetteFile = recette as Recetteclass[]
    });

    if (this.searchedText != undefined && this.searchedText != "")
    {
      var newListeRecette = [];
      // On recherche le texte dans les recettes
      for (var i=0; i < this.listeRecetteFile.length; i++ )
      {
        if (this.listeRecetteFile[i].name.toUpperCase().includes(this.searchedText.toUpperCase()) ||
          this.listeRecetteFile[i].description.toUpperCase().includes(this.searchedText.toUpperCase()) ||
          this.listeRecetteFile[i].ingredients.toString().toUpperCase().includes(this.searchedText.toUpperCase()) ||
          this.listeRecetteFile[i].processus.toString().toUpperCase().includes(this.searchedText.toUpperCase())
        )
        {
          // On filtre la liste des recettes affichées
          newListeRecette.push(this.listeRecetteFile[i])
        }
      }

      this.listeRecetteFile = newListeRecette;

    }

  }

}
