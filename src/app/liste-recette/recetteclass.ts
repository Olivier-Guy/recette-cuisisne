export class Recetteclass {

  // 1 - Proprietes
  public id!: number;
  public name!: string;
  public categorie!: categorieList;
  public duree!: dureeList;
  public indiceNutritionel!: indiceNutritionelList;
  public typePlat!: typePlatList;
  public difficulte!: difficulteList;

  // 2 - Ingrédients

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  serialize() {
    return JSON.stringify(this.toObject());
}

  static fromJSON(serialized : string) : Recetteclass {
    const recette : ReturnType<Recetteclass["toObject"]> = JSON.parse(serialized);

    return new Recetteclass(
      recette.id,
      recette.name,
    )
  }

  toObject(){
    return {
        id: this.id,
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
