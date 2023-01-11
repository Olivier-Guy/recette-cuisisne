export class Recetteclass {

  // 1 - Proprietes
  public name: string = "";
  public categorie!: categorieList;
  public duree!: dureeList;
  public indiceNutritionel!: indiceNutritionelList;
  public typePlat!: typePlatList;
  public difficulte!: difficulteList;

  // 2 - Ingrédients

  constructor(name: string, categorie: categorieList, duree: dureeList){

  }

  serialize() {
    return JSON.stringify(this.toObject());
}

  static fromJSON(serialized : string) : Recetteclass {
    const recette : ReturnType<Recetteclass["toObject"]> = JSON.parse(serialized);

    return new Recetteclass(
      recette.name,
      recette.categorie,
      recette.duree
    )
  }

  toObject(){
    return {
        name : this.name,
        categorie : this.categorie,
        duree : this.duree,
        indiceNutritionel : this.duree,
        typePlat : this.duree,
        difficulte : this.duree
    }
  }

}

export enum categorieList {
  'Entrée',
  'Plat principal',
  'Dessert',
}

export enum indiceNutritionelList {
  'A',
  'B',
  'C',
  'D'
}

export enum typePlatList {
  'viande',
  'Poisson'
}

export enum dureeList {
  '-',
  '--',
  '---',
  '----',
  '-----'
}

export enum difficulteList {
  '*',
  '**',
  '***',
  '****'
}
