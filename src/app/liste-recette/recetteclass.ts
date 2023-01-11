export class Recetteclass {
  public name: String = "";
  public categorie!: categorieList;
  public indiceNutritionel!: indiceNutritionelList;
  public typePlat!: typePlatList;
  public duree!: duréeList;
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

export enum duréeList {
  '-',
  '--',
  '---',
  '----',
  '-----'
}
