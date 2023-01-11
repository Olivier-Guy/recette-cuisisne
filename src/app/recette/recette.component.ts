import { Component, Input, OnInit } from '@angular/core';
import { Recetteclass } from '../liste-recette/recetteclass';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent implements OnInit {


  @Input() recette!: Recetteclass;

  constructor() {

  }

  ngOnInit() {

  }

}
