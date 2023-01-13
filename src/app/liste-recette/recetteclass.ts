export class Recetteclass {

  // 1 - Proprietes
  public id!: number;
  public name!: string;
  public categorie!: string;
  public duree!: string;
  public indiceNutritionel!: string;
  public typePlat!: string;
  public difficulte!: string;

  // 2 - Recette
  public description!: string;
  public ingredients: string[] = [];
  public processus: string[] = [];
  public liens: string[] = [];

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  serialize() {
    return JSON.stringify(this.toObject());
  }

  static fromJSON( serialized : string) : Recetteclass {
    const recette : ReturnType<Recetteclass["toObject"]> = JSON.parse(serialized);
    debugger;
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

  getCategorie ( categorieStr: string) :categorieList {

    switch (categorieStr) {
      case "Entrée":
        return categorieList["Entrée"]
        break;
      case "Plat principal":
        return categorieList["Plat principal"]
        break;
      case "Dessert":
        return categorieList["Dessert"]
        break;
      default:
        return categorieList["Divers"];
        break;
    }
  }

  getDuree ( dureeStr: string) :dureeList {

    switch (dureeStr) {
      case "-":
        return dureeList["-"]
        break;
      case "--":
        return dureeList["--"]
        break;
      case "---":
        return dureeList["---"]
        break;
      case "----":
        return dureeList["----"]
        break;
      case "----":
        return dureeList["----"]
        break;
      case "-----":
        return dureeList["-----"]
        break;
      default:
        return dureeList["-"];
        break;
    }
  }

  getIndiceNutritionel( indiceStr: string): indiceNutritionelList {

      return indiceNutritionelList.A;
  }

  getTypePlatList ( typePlatStr: string): typePlatList {
    return typePlatList.viande;
  }

  getDifficulteList ( difficulteStr: string): difficulteList {
    return difficulteList["*"];
  }

}

export enum categorieList {
  'Entrée',
  'Plat principal',
  'Dessert',
  'Divers'
}

export enum indiceNutritionelList {
  'A',
  'B',
  'C',
  'D',
  'E'
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
