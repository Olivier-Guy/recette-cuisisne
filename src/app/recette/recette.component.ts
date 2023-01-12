import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Recetteclass } from '../liste-recette/recetteclass';
import Recettes from '../../assets/listeJson-recettes.json';
import { RecetteService } from '../liste-recette/recette.service';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {

  panelOpenState = false;
 recette!: Observable<Recetteclass>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recetteService: RecetteService
    ) {}

  //this.service.getHero(params.get('id')!))

  ngOnInit() {

    this.recette = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.recetteService.getRecette(params.get('id')!))
      );
  }

  gotoRecettes() {
    this.router.navigate(['/recettes']);
  }
}

